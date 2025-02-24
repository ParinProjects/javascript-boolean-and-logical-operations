// Exercise #2: Promotion Conditions
const john = {
    amtPaidLastMonth: 4001,
    boughDate: 'Friday',
    hasBoughtProductFromITCategory: true,
    hasAttendedDiscountEvent: true,
    memberRank: 'Gold'
}

// Start coding here
let lastMonthPaidMoreThan4000 = john.amtPaidLastMonth > 4000;
let isWeekday = john.boughDate !== 'Saturday' && john.boughDate !== 'Sunday';
let hasBoughtProductFromITCategory = john.hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent = john.hasAttendedDiscountEvent;
let isPlatinum = 'Platinum' === john.memberRank;

let hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday &&
    !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent)
    || isPlatinum;

console.log(hasPromotion);
