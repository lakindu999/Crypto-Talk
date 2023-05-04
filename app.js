const express = require('express');

// express app
const app = express();

//register view engine
app.set('view engine','ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Bitcoin Price', snippet: 'The recent surge in the price of Bitcoin has once again brought attention to the world of cryptocurrency. While the volatility of the market can be intimidating, its important to remember that cryptocurrency is still in its infancy and has the potential to revolutionize the way we conduct transactions and store value. As we continue to see increased adoption and innovation in the space, its exciting to think about the possibilities of a decentralized financial system that empowers individuals and reduces the influence of centralized institutions. Stay tuned for more updates and insights on the crypto world!'},
        {title: 'Bitcoin Price', snippet: 'The recent surge in the price of Bitcoin has once again brought attention to the world of cryptocurrency. While the volatility of the market can be intimidating, its important to remember that cryptocurrency is still in its infancy and has the potential to revolutionize the way we conduct transactions and store value. As we continue to see increased adoption and innovation in the space, its exciting to think about the possibilities of a decentralized financial system that empowers individuals and reduces the influence of centralized institutions. Stay tuned for more updates and insights on the crypto world!'},
        {title: 'Bitcoin Price', snippet: 'The recent surge in the price of Bitcoin has once again brought attention to the world of cryptocurrency. While the volatility of the market can be intimidating, its important to remember that cryptocurrency is still in its infancy and has the potential to revolutionize the way we conduct transactions and store value. As we continue to see increased adoption and innovation in the space, its exciting to think about the possibilities of a decentralized financial system that empowers individuals and reduces the influence of centralized institutions. Stay tuned for more updates and insights on the crypto world!'},
      ];
  // res.send('<p>home page</p>');
  res.render('index',{ title: 'Home',blogs });
});

app.get('/about', (req, res) => {
  // res.send('<p>about page</p>');
  res.render('about',{ title: 'About' });
});

app.get('/blogs/create', (req, res) => {
    
    // res.send('<p>about page</p>');
    res.render('create',{ title: 'Create new blog' });
  });



// redirects
// app.get('/about-us', (req, res) => {
//   res.redirect('/about');
// });

// 404 page
app.use((req, res) => {
    res.render('404',{ title: '404' });
});