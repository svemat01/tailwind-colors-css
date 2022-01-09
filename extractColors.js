// Meant to be ran in the console window of https://tailwindcss.com/docs/customizing-colors

const twColors = document.getElementsByClassName('grid grid-cols-1 gap-8')[0].children;

const colors = {}

for (let i = 0; i < twColors.length; i++) {
    const div1 = twColors[i].children[0];
    // console.log(div1);

    const colorName = div1.children[0].children[0].children[0].innerHTML.toLowerCase();

    const colorList = div1.children[1].children;

    colors[colorName] = {}
    // console.log('colorName', colorName)
    // console.log('colorList', colorList)

    for (let y = 0; y < colorList.length; y++) {
        const div2 = colorList[y].children[1];
        // console.log(div2);

        const intensity = div2.children[0].innerHTML;
        const hex = div2.children[1].innerHTML;

        // console.log('intensity', intensity);
        // console.log('hex', hex);

        colors[colorName][intensity] = hex;
    }
}

let result = ':root {\n';

Object.entries(colors).forEach(([colorName, intensities]) => {
    Object.entries(intensities).forEach(([intensity, hex]) => {
        result += `    --tw-${colorName}-${intensity}: ${hex};\n`;
    });
    result += '\n';
});

result += '}';

console.log(result);