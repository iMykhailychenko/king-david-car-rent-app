const hours: number = new Date().getHours();

export const isAnalitic = (): boolean => {
    try {
        const storedHours = localStorage.getItem('hours');

        if (storedHours === null || JSON.parse(storedHours) < hours - 1) {
            const newHours = JSON.stringify(new Date().getHours());
            localStorage.setItem('hours', newHours);
            return true;
        }
        return false;

    } catch (err) {
        return true;
    }
}