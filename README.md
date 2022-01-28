# stop-the-resellers-api-template
Templates &amp; Examples for the official STR API.

This guide contains: 

> - Templates of how to report / check a user with our API
> - Examples of what the request would return.

Covered Languages:

> - JavaScript
> - Python (SOON)

**Check user**

> - Method: `GET`
> - URL: `/api/v1/checkUser/USER-ID`
> - Headers: `Authorization: Bearer YOUR-API-KEY`

**Report**

> - Method: `POST`
> - URL: `api/v1/report?`
> - Data:
>    - target: `USER-ID` 
>    - type: `REPORT-TYPE (user OR url)`
>    - reason: `Reason AND evidence (in URL form, ex: imgur)`
> - Headers: `Authorization: "Bearer YOUR-API-KEY"`

How to obtian your API Key:

> 1. Head to the official Stop The Reseller dashboard: https://stoptheresellers.com/dashboard and log in
> 2. On the left Sidebar, press "Settings"
> 3. Copy your API KEY
> 4. NEVER SHARE THIS TO ANYONE.

![image](https://user-images.githubusercontent.com/39080460/151575246-1ce49f58-87df-4e25-89c6-a080fb8e717c.png)

