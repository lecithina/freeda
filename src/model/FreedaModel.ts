// ONE platform browser side-effect imports — required before any ONE usage
import '@refinio/one.core/lib/system/load-browser.js';
import '@refinio/one.core/lib/system/browser/crypto-helpers.js';
import '@refinio/one.core/lib/system/browser/crypto-scrypt.js';
import '@refinio/one.core/lib/system/browser/settings-store.js';
import '@refinio/one.core/lib/system/browser/storage-base.js';
import '@refinio/one.core/lib/system/browser/storage-base-delete-file.js';
import '@refinio/one.core/lib/system/browser/storage-streams.js';
import '@refinio/one.models/lib/recipes/Certificates/AffirmationCertificate.js';
import '@refinio/one.models/lib/recipes/Certificates/TrustKeysCertificate.js';
import '@refinio/one.models/lib/recipes/Certificates/RightToDeclareTrustedKeysForEverybodyCertificate.js';
import '@refinio/one.models/lib/recipes/Certificates/RightToDeclareTrustedKeysForSelfCertificate.js';

import {objectEvents} from '@refinio/one.models/lib/misc/ObjectEventDispatcher.js';
import ChannelManager from '@refinio/one.models/lib/models/ChannelManager.js';
import LeuteModel from '@refinio/one.models/lib/models/Leute/LeuteModel.js';
import QuestionnaireModel from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import type {Questionnaire} from '@refinio/one.models/lib/models/QuestionnaireModel.js';
import SingleUserNoAuth from '@refinio/one.models/lib/models/Authenticator/SingleUserNoAuth.js';
import RecipesStable from '@refinio/one.models/lib/recipes/recipes-stable.js';
import RecipesExperimental from '@refinio/one.models/lib/recipes/recipes-experimental.js';
import {
    ReverseMapsStable,
    ReverseMapsForIdObjectsStable
} from '@refinio/one.models/lib/recipes/reversemaps-stable.js';
import {
    ReverseMapsExperimental,
    ReverseMapsForIdObjectsExperimental
} from '@refinio/one.models/lib/recipes/reversemaps-experimental.js';
import {OEvent} from '@refinio/one.models/lib/misc/OEvent.js';

/**
 * FreedaModel — minimal ONE platform orchestrator for the Hey Freeda questionnaire app.
 *
 * Stripped-down version of one.leute's Model.ts, keeping only what's needed:
 * SingleUserNoAuth → LeuteModel → ChannelManager → QuestionnaireModel
 */
export default class FreedaModel {
    public readonly onReady = new OEvent<() => void>();

    public readonly one: SingleUserNoAuth;
    public readonly leuteModel: LeuteModel;
    public readonly channelManager: ChannelManager;
    public readonly questionnaireModel: QuestionnaireModel;

    private questionnairesToRegister: Questionnaire[] = [];

    constructor() {
        // No comm server needed — offline-first app
        this.leuteModel = new LeuteModel('', false);
        this.channelManager = new ChannelManager(this.leuteModel);
        this.questionnaireModel = new QuestionnaireModel(this.channelManager, this.leuteModel);
        this.one = new SingleUserNoAuth({
            recipes: [...RecipesStable, ...RecipesExperimental],
            reverseMaps: new Map([...ReverseMapsStable, ...ReverseMapsExperimental]),
            reverseMapsForIdObjects: new Map([
                ...ReverseMapsForIdObjectsStable,
                ...ReverseMapsForIdObjectsExperimental
            ]),
            storageInitTimeout: 20000
        });

        this.one.onLogin(this.init.bind(this));
        this.one.onLogout(this.shutdown.bind(this));
    }

    /**
     * Register questionnaires to be loaded after init.
     * Call this before loginOrRegister().
     */
    public setQuestionnaires(questionnaires: Questionnaire[]): void {
        this.questionnairesToRegister = questionnaires;
    }

    /**
     * Auto-register on first visit, login on return.
     */
    public async loginOrRegister(): Promise<void> {
        await navigator.storage.persist();

        if (await this.one.isRegistered()) {
            await this.one.login();
        } else {
            await this.one.register();
        }
    }

    /**
     * Initialize all models after login.
     */
    private async init(_instanceName: string, _secret: string): Promise<void> {
        try {
            await objectEvents.init();
            await this.leuteModel.init();

            const myMainId = await this.leuteModel.myMainIdentity();
            await this.leuteModel.trust.certify(
                'RightToDeclareTrustedKeysForEverybodyCertificate',
                {beneficiary: myMainId}
            );

            await this.channelManager.init();
            await this.questionnaireModel.init();

            if (this.questionnairesToRegister.length > 0) {
                this.questionnaireModel.registerQuestionnaires(this.questionnairesToRegister);
            }

            this.onReady.emit();
        } catch (e) {
            await this.shutdown().catch(console.error);
            throw e;
        }
    }

    /**
     * Shutdown all models in reverse order.
     */
    public async shutdown(): Promise<void> {
        try {
            await this.questionnaireModel.shutdown();
        } catch (e) {
            console.error(e);
        }

        try {
            await this.channelManager.shutdown();
        } catch (e) {
            console.error(e);
        }

        try {
            await this.leuteModel.shutdown();
        } catch (e) {
            console.error(e);
        }

        await objectEvents.shutdown();
    }
}
