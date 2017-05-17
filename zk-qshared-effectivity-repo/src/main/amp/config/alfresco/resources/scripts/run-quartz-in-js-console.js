var ctxt, scheduler;

// get Spring context and Quartz scheduler
ctxt = Packages.org.springframework.web.context.ContextLoader.getCurrentWebApplicationContext();
scheduler = ctxt.getBean('schedulerFactory', Packages.org.quartz.Scheduler);

// For custom js based job - public urls for expiration
scheduler.triggerJob('qsharedExpirationJobDetail', 'ZYLK');
