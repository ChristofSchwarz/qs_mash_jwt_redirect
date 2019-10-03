# qs_mash_jwt_redirect
Qlik Sense mashup to redirect to a desired Sense resource using a JWT token 

 ![alttext](https://github.com/ChristofSchwarz/pics/raw/master/jwtiframe2.gif "screenshot")

This requests 2 virtual proxies on the Qlik Sense Server to be set up (QMC)
 * one that is set to "always anonymous" (I called it "anonym")
 * one that is set to JWT authentication (I called it "jwt")

See the inline-comments in <a href="redirect.html">html</a> file.

Then the iframe will open like this (my server is called qmi-qs-sn)
```
<iframe src="https://qmi-qs-sn/anonym/extensions/redirect/redirect.html?target=/jwt/sense/app/89eaf59f-d47a-4a61-9a79-ef34b7e016c1/sheet/0aa6fdce-2feb-4c0f-a995-dcf8197e2dbc">
```
The JWT token that is used is either hard-coded in redirect.html or you can dynamically pass it via querystring in the url like this
```
<iframe src="https://qmi-qs-sn/anonym/extensions/redirect/redirect.html?jwt=ey.....&target=/jwt/sense/app/89eaf59f-d47a-4a61-9a79-ef34b7e016c1/sheet/0aa6fdce-2feb-4c0f-a995-dcf8197e2dbc">

```
