import { motion } from 'framer-motion';

interface Props {
    number: string;
    title: string;
}

export default function SectionHeader({ number, title }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-2"
        >
            <span className="text-cyan font-mono text-sm">// {number}</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
            <div className="flex-1 h-px bg-border hidden sm:block" />
        </motion.div>
    );
}
