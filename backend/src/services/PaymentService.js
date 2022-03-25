const db = require("../entities");

// create a new payment
exports.create = async (lid, amount) => {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();

  try {
    const Payment = db.payments;

    // save payment in the db
    const newPayment = await Payment.create({
      PaymentId: Math.random(),
      LoanId: lid,
      payment_date: year + "-" + month + "-" + date,
      payment_amount: amount,
    });

    return {
        PaymentId: newPayment.PaymentId,
        LoanId: newPayment.LoanId,
        payment_date: newPayment.payment_date,
        payment_amount: newPayment.payment_amount,
    };

  } catch (err) {
    console.log(err.message);
    throw err;
  }
};