
describe("processing payments",()=>{
    beforeAll(()=>{
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });


    it('should update UI with payment info', function() {

        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('10');

    });

    it('should prevent empty input', function() {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments)).toEqual(0);
    });
  

    
    it('should append correct value to payment table', function() {
        appendPaymentTable(allPayments['payment1']);
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList.length).toEqual(2);
        expect(curTdList[0].innerText).toEqual('100');
        expect(curTdList[1].innerText).toEqual('10');
    });

afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
    });
});





