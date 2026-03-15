import { motion } from 'framer-motion';

interface Props {
    title: string;
    number?: string;
}

export default function SectionHeader({ title }: Props) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold tracking-tight mb-2"
        >
            {title}
        </motion.h2>
    );
}
