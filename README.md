# Experience Cloud Website with LWC component
This project is an example of the website with LWC component, that has properties (stored in a digital experience bundle) and use Salesforce CMS (linking an image stored in CMS)

## Initial Setup
Make sure that the Org has the following settings enabled:
- Digital Experience -> Settings: Enable Digital Experience 
- Digital Experience -> Settings: check/enable ExperienceBundle Metadata API

Update the Org specific values in the following files:
force-app/main/default/networks/byolwr20240520e.network-meta
{EMAIL_SENDER_ADDRESS} - replace with email address to use as a Sender for the emails from this website

force-app/main/default/sites/byolwr20240520e.site-meta
{SITE_ADMIN} - replace with the user name to be assigned as a site admin
{SITE_GUEST_RECORD_DEFAULT_OWNER} - replace with the user name - by default it's the same as {SITE_ADMIN}

## Website
There is a Build Your Own (LWR) Enhanced Website with minimal settings and is unpublished.
Site Name: byolwr20240520e

## Deployment
sfdx project deploy start  --manifest manifest/package.xml