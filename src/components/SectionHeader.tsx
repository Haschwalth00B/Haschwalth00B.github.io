import { motion } from 'framer-motion';

interface Props {
    title: string;
    number: string;
}

export default function SectionHeader({ title, number }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-marker"
        >
            <span className="section-marker__label">
                {title} / {number}
            </span>
            <div className="section-marker__rule" />
        </motion.div>
    );
}
