

const obj = {
    student1: {
        physics: 70,
        chemistry: 75,
        math: 80,
        higherMath: 90
    },
    student2: {
        physics: 70,
        chemistry: 75,
        math: 80,
        higherMath: 90
    },
    student3: {
        physics: 70,
        chemistry: 75,
        math: 80,
        higherMath: 90
    },
    student4: {
        physics: 70,
        chemistry: 75,
        math: 80,
        higherMath: 90
    }
}
obj.student1.math = 95;
obj.student5 = { physics: 80, chemistry: 86, math: 85, higherMath: 96 };
const { student1, student2, student3, student4, student5 } = obj;
console.log(student5)
delete obj.student5
console.log(obj)