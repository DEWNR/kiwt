var bAllowBookings = true;
var bookeasyData = {};
var bookeasyType = 'tours'; // defaults to accomodation
var bookingDate = new Date(); // get today's date
var productID = 80122; // set operatorIDs to display

$(function() {

    // load details gadget
    BE.gadget.details('#bookeasy__details-gadget', {
        defaultDate: bookingDate,
        descriptionHover: true,
        period: 1,
        productID: productID,
        showHoverInline: true,
        showQuantity: false,
        thumbsInGrid: true,
        type: bookeasyType,
        noAdults: 12,
        noChildren: 12,
        noStudents: 12,
        noConcessions: 12,
        noInfants: 0,
        noObservers: 0,
        vcID: 188
    });

});
