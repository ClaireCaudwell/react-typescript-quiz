// creates a new array randomly

export const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5);