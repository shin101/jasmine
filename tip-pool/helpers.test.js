

describe("helpers test",()=>{
    beforeEach(()=>{
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it('should calculate total', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);
    });

    it('should calculate tip percent', function() {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments)).toEqual(0);
    });

    it('should add value to new td', function() {
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });

});

afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
