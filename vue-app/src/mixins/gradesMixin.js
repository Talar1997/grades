export const gradesMixin = {
    methods: {
        countSeverity(severity) {
            if (this.isBetween(severity, 0, 20)) return 'primary'
            if (this.isBetween(severity, 21, 40)) return 'success'
            if (this.isBetween(severity, 41, 60)) return 'info'
            if (this.isBetween(severity, 61, 80)) return 'warning'
            else return 'danger'
        },

        isBetween(num, min, max) {
            return num >= min && num <= max;
        }
    },
}