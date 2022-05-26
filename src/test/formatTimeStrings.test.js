import formatTimeStringstest from "../utilits/formatTimeStrings";


describe('formatTimeStrings test', () => {
    it('returns test1', () => {
        const expected = 'None';
        const received = formatTimeStringstest([]);

        expect(received).toEqual(expected);
    });

    it('returns test2', () => {
        const openingHours = ["12-00"];
        const expected = `${openingHours[0]} - Tillt`;
        const received = formatTimeStringstest(openingHours);

        expect(received).toEqual(expected);
    });

    it('returns test3', () => {
        const openingHours = ["12-00", "16-00", "18-00"];
        const expected = `${openingHours[0]} - ${openingHours[openingHours.length - 1]}`;
        const received = formatTimeStringstest(openingHours);

        expect(received).toEqual(expected);
    })
});
