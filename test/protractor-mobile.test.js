const {expect} = require('chai');

describe('Protractor-mobile test suite', function () {

    it('should check website title', async function () {
       await browser.get('https://www.onliner.by/');
       let title = await browser.getTitle();
        expect(title).to.be.equal('Onliner');
    });

    it('should open article in "Люди" category', async function () {
        await browser.get('https://www.onliner.by/');
        let catalogLink = element(by.xpath('//a[contains(text(), "КАТАЛОГ")][parent::h2]'));
        await browser.executeScript('arguments[0].scrollIntoView()', catalogLink);
        let peopleLink = element(by.xpath('//a[text()="Люди"][parent::h2]'));
        await peopleLink.click();
        await browser.sleep(2000);
        let firstArticle = element(by.xpath('//div[@id="widget-14"]'));
        await firstArticle.click();
        await browser.sleep(2000);
        let title = await browser.getTitle();
        expect(title).to.be.equal('Минчане рассказали, что хотят на День всех влюбленных');
    })
});