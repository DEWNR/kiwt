var bAllowBookings = true;
var bookeasyData = {};
var bookeasyType = 'tours'; // defaults to accomodation
var bookingDate = new Date(); // get today's date
var productID = 80122; // set operatorIDs to display
var availbleDate = new Date(2016, 10 - 1, 1);
var todaysDate = new Date();

bookingDate.setDate(bookingDate.getDate() + 1);

if (availbleDate > todaysDate) {
    bookingDate = availbleDate;
}

$(function() {

    // load details gadget
    BE.gadget.details('#bookeasy__details-gadget', {
        defaultDate: bookingDate,
        descriptionHover: false,
        period: 1,
        productID: productID,
        showHoverInline: false,
        showQuantity: false,
        thumbsInGrid: true,
        type: bookeasyType,
        noAdults: 12,
        noChildren: 12,
        noStudents: 12,
        noConcessions: 12,
        noInfants: 0,
        noObservers: 0,
        period: 1,
        adults: 1,
        vcID: 188
    });

});
