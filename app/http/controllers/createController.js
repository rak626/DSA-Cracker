const Question = require('../../models/question');

function createController() {
    return {
        index(req, res) {
            res.render('./create/createPage');
        },
        store(req, res) {
            console.log(req.body);
            const { problemName, link, difficulty, topic } = req.body;
            if (!problemName || !link || !difficulty || !topic) {
                return res.redirect('/create');
            }
            const question = new Question({
                name: req.body.problemName,
                link: req.body.link,
                difficulty: req.body.difficulty,
                topic: req.body.topic,
            });
            question
                .save()
                .then((result) => {
                    Question.populate(result, '_id', (err, id) => {
                        //upload successful
                        return res.render('./create/createPage');
                    });
                })
                .catch((err) => {
                    console.log(err);
                    return res.redirect('/');
                });
        },
    };
}

module.exports = createController;

// store(req, res) {
//             //validate req
//             const { phone, address } = req.body;
//             if (!phone || !address) {
//                 req.flash('error', 'All fields are required');
//                 return res.redirect('/cart');
//             }
//             const order = new Order({
//                 customerId: req.user._id,
//                 items: req.session.cart.items,
//                 phone: phone,
//                 address: address,
//             });
//             order
//                 .save()
//                 .then((result) => {
//                     Order.populate(
//                         result,
//                         { path: 'customerId' },
//                         (err,placedOrder) => {
//                             req.flash('success', 'Order placed successfully');
//                             delete req.session.cart;
//                             //Emit
//                             const eventEmitter = req.app.get('eventEmitter');
//                             eventEmitter.emit('orderPlaced', placedOrder);
//                             return res.redirect('/customer/orders');
//                         }
//                     );
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     req.flash('error', 'Something went wrong');
//                     return res.redirect('/cart');
//                 });
//         }
