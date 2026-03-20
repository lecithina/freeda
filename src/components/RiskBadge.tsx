interface Props {
    level: 'niedrig' | 'mittel' | 'hoch' | undefined;
}

const CONFIG: Record<'niedrig' | 'mittel' | 'hoch', {label: string; color: string}> = {
    niedrig: {label: 'Niedrig', color: '#4ade80'},
    mittel: {label: 'Mittel', color: '#facc15'},
    hoch: {label: 'Hoch', color: '#ef4444'}
};

export default function RiskBadge({level}: Props) {
    if (!level) return null;

    const {label, color} = CONFIG[level];

    return (
        <span
            className="inline-block rounded-full px-3 py-0.5 text-xs font-semibold"
            style={{backgroundColor: color, color: '#000'}}
        >
            {label}
        </span>
    );
}
