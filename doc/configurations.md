# How to configure the template
This is the **Native HTML** version, so you have to look for it to change it. Please follow the steps below.

## Website URL
Change the default website address, namely ```illvart-aboutme.netlify.com``` to be your website address.

The location of the file that includes the website address is:

- /static/index.html
- /static/robots.txt
- /static/sitemap.xml

Search all the ```illvart-aboutme.netlify.com``` website addresses found in the file above and change them to your website address.

## Website title
Search and change the title of the website at ```/static/index.html``` from ```aboutme - Your personal homepage``` becomes the title of your website.

## Website title (short)
Search and change the short title of the website at ```/static/index.html``` from ```aboutme``` to the short title of your website.

## Website description
Search and change the description of the website at ```/static/index.html``` from ```Your personal homepage running on Node.js``` to be the description of your website.

## Twitter
Search the code below at ```/static/index.html```.
```html
<meta name="twitter:site" content="@your_site_username">
<meta name="twitter:creator" content="@your_username">
```
Change ```your_site_username``` to the username of your Twitter website (if you don't have a Twitter account for your website then replace it with your Twitter username).

Change ```your_username``` to your Twitter username.

##  Facebook
Search the code below at ```/static/index.html```.
```html
<!--
<meta property="fb:app_id" content=" ">
<meta property="fb:pages" content=" ">
-->
```
If you have a Facebook page and have a application on Facebook developers, you can use this by uncommenting it as below:
```html
<meta property="fb:app_id" content=" ">
<meta property="fb:pages" content=" ">
```
Then fill in id ```fb:app_id``` your facebook developer application in ```content=" "```.

Also do it on ```fb:pages``` for your facebook page id.

## Search engine verify
If you have or want to include a search engine verification code such as **google**, **bing** and **yandex** then search the code below at ```/static/index.html``` and uncomment.
```html
<!--
<meta name="google-site-verification" content=" ">
<meta name="msvalidate.01" content=" ">
<meta name="yandex-verification" content=" ">
-->
```

## Schema
Search the code below at ```/static/index.html```.
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Full Name",
  "url": "https://illvart-aboutme.netlify.com",
  "sameAs": [
    "https://twitter.com",
    "https://facebook.com",
    "https://instagram.com"
  ]
}
```
Change ```Your Full Name``` with your name.

And changes:
```json
"https://twitter.com",
"https://facebook.com",
"https://instagram.com"
```
with your social media URL, we only include Twitter, Facebook and Instagram. For others, please find out at [https://developers.google.com/search/docs/data-types/social-profile](https://developers.google.com/search/docs/data-types/social-profile) .

## Google Analytics
If you have **Google Analytics**, please find the code below:
```html
<!--
<script>
(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date;a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
ga("create", "UA-XXXXXXX", "auto");
ga("send", "pageview");
</script>
-->
```
If you want to use uncomment and change **UA-XXXXXXX** to be your Google Analytics id.

## Cover
Search ```Your Full Name``` at ```/static/index.html``` and replace it with your name.

Search ```DevOps and Full-Stack Developer``` at ```/static/index.html``` and change with your position.

## You must understand HTML
Search all comments on ```/static/index.html``` such as ```<!-- // Start about \\-->``` and replace all the content below. If you don't need it, you can remove it or comment.

## Layout
Change the content layout from the center position to the left.

Search ```<main class="container center">``` in ```/static/index.html``` and remove the ```center``` class.

Search ```<div class="list horizontal">``` in ```/static/index.html``` and remove the ```horizontal``` class.

## Social media
Adjust your social media address under comment ```<!-- Start footer -->```.

You can search and choose the Icon at  [https://cdn.materialdesignicons.com/3.6.95/](https://cdn.materialdesignicons.com/3.6.95/) .

## PWA
Search the code below in ```/static/site.webmanifest```.
```json
"name": "About Me",
"short_name": "aboutme",
```
Change ```About Me``` with the long title of your website.

Change ```aboutme``` with the short title of your website.

## Images
Replace all images according to the size available on ```/static/assets/img/```.

- Size ```me.png``` is 200x200.
- Size ```banner.png``` is 1200x630.
- Size ```/static/assets/img/logo/apple-touch-icon.png``` is 180x180.

---

The rest, please search and change your needs.
If there are problems please create new issue at [https://github.com/illvart/aboutme/issues](https://github.com/illvart/aboutme/issues) .

## Note
If there are have a changes or updates you can adjust them manually.
