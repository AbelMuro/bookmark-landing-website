export const itemVariant = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0
    },
    exit: {
        opacity: 0,
        x: -50,
    }
}

export const menuVariant = {
    hidden: {
        clipPath: 'circle(0px at 80% 35px)'
    },
    show: {
        clipPath: 'circle(100%)',
        transition: {
            duration: 0.5,
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    },
    exit: {
        clipPath: 'circle(0px at 80% 35px)',
        transition: {
            duration: 0.5
        }
    }
}