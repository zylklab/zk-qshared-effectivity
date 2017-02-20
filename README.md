# Public url documents (qshared) with effectivity in Alfresco Share

This customization provides a custom behaviour when qshared aspect is applied on documents, i.e., when a document has a public url in Alfresco Share. It adds the effectivity aspect (cm:effectivity), setting a validity period of 30 days for the document. Once the validity period is expired a daily quartz is run for removing qshared aspect, unpublishing the public url. A custom metadata template and indicator are also included.

## Packaging

You may pack it with jar command. Go into the directory that you unzipped, or cloned via git:

    $ git clone https://github.com/zylklab/zk-qshared-effectivity
    $ cd zk-qshared-effectivity
    $ jar -cf zk-qshared-effectivity.jar *

Note: this jar would only work if Alfresco repo and Alfresco Share are deployed in the same Tomcat instance. 

## Installing
 - Just copying the corresponding jar into $TOMCAT/shared/lib and restart Alfresco service.
 - Once started, you need finally to copy (alfresco/resources/scripts/qshared.js) script into Data Dictionary / Scripts folder for the cronjob execution.
 - Additionaly, you may also use a virtual folder template located at (alfresco/resources/json/qsharedFolder.json)

## Things to improve / TODO  
 - [ ] Ant file for generating jar file and local tasks for a local deployment
 - [ ] Use Alfresco Maven SDK 
 - [ ] Separate in two AMPs
 - [ ] Deploy in bootstrap ACP with qshared.js script and smart template
 - [ ] Configure cronjob in alfresco-global.properties (now in zk-scheduled-action-services-context.xml)
 - [ ] Configure publication days in alfresco-global.properties (now is 30 in add-aspect-effectivity.js)

## Links

Based on blog posts:
 - http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/how-to-control-public-shared-content-in-alfresco
 - http://www.zylk.net/es/web/guest/web-2-0/blog/-/blogs/programando-tareas-en-alfresco

## Tested

It should work in Alfresco 4.2 and above
