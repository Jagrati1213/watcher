/** 
* Function use to generate random colors.
* @returns `color`- returns color 
*/


export default function generateRandomColor() {
    let color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
}