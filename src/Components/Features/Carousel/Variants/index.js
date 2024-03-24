export const fadeInOutVariant = {
    hidden: {
        scale: 0
    },
    show: {
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 150,
            damping: 6,
        }
    }
}