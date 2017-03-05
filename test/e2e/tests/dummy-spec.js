'use strict';
//取消同步等待angular, 如果要测试angular app, 需要设置为false, or remove it
browser.ignoreSynchronization = true;
describe('End-2End test sample ', function() {
    it('should baidu homepage tittle match "百度一下，你就知道"', function() {
        browser.get('http://www.baidu.com');
        console.log('Log in protractor spec');
        expect(browser.getTitle()).toEqual('百度一下，你就知道');
    });
});
