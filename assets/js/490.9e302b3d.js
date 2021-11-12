(window.webpackJsonp=window.webpackJsonp||[]).push([[490],{1556:function(e,t,o){"use strict";o.r(t);var s=o(26),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"scaling-n8n"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scaling-n8n"}},[e._v("#")]),e._v(" Scaling n8n")]),e._v(" "),o("p",[e._v("n8n can be run in different "),o("RouterLink",{attrs:{to:"/getting-started/key-concepts/modes.html"}},[e._v("modes")]),e._v(" depending on your needs. The "),o("code",[e._v("queue")]),e._v(" mode provides the best scalability, and its configuration is detailed here.")],1),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#how-it-works"}},[e._v("How it works")])]),o("li",[o("a",{attrs:{href:"#configuring-workers"}},[e._v("Configuring workers")]),o("ul",[o("li",[o("a",{attrs:{href:"#set-encryption-key"}},[e._v("Set encryption key")])]),o("li",[o("a",{attrs:{href:"#set-executions-mode"}},[e._v("Set executions mode")])]),o("li",[o("a",{attrs:{href:"#start-redis"}},[e._v("Start Redis")])]),o("li",[o("a",{attrs:{href:"#start-workers"}},[e._v("Start workers")])])])]),o("li",[o("a",{attrs:{href:"#running-n8n-with-queues"}},[e._v("Running n8n with queues")])]),o("li",[o("a",{attrs:{href:"#webhook-processors"}},[e._v("Webhook processors")]),o("ul",[o("li",[o("a",{attrs:{href:"#configure-webhook-url"}},[e._v("Configure webhook URL")])]),o("li",[o("a",{attrs:{href:"#configure-load-balancer"}},[e._v("Configure load balancer")])]),o("li",[o("a",{attrs:{href:"#disable-webhook-processing-in-the-main-process-optional"}},[e._v("Disable webhook processing in the main process (optional)")])])])]),o("li",[o("a",{attrs:{href:"#avoiding-downtime"}},[e._v("Avoiding downtime")])])])]),o("p"),e._v(" "),o("h2",{attrs:{id:"how-it-works"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),o("p",[e._v("When running in "),o("code",[e._v("queue")]),e._v(" mode you have multiple n8n instances set up (as many as desired or necessary to handle your workload), with one main instance receiving workflow information (e.g. triggers) and the worker instances performing the executions.")]),e._v(" "),o("p",[e._v("The workflow information from the n8n main instance is passed to a message broker, "),o("a",{attrs:{href:"#start-redis"}},[e._v("Redis")]),e._v(", which maintains the queue of pending executions and allows them to be picked up by the next available worker.")]),e._v(" "),o("p",[e._v("Each worker is its own Node.js instance, running in "),o("code",[e._v("main")]),e._v(" mode, but able to handle multiple simultaneous workflow executions due to their high IOPS (input-output operations per second).")]),e._v(" "),o("p",[e._v("By using worker instances and running in queue mode, you can scale n8n up (by adding workers) and down (by removing workers) as needed to handle the workload at any point in time.")]),e._v(" "),o("h2",{attrs:{id:"configuring-workers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuring-workers"}},[e._v("#")]),e._v(" Configuring workers")]),e._v(" "),o("p",[e._v("Workers are n8n instances that do the actual work. They receive information from the main n8n process about the workflows that have to get executed, execute the workflows, and update the status after each execution is complete.")]),e._v(" "),o("h3",{attrs:{id:"set-encryption-key"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-encryption-key"}},[e._v("#")]),e._v(" Set encryption key")]),e._v(" "),o("p",[e._v("n8n will automatically generates an encryption key upon first startup. You can also provide your own custom key via "),o("RouterLink",{attrs:{to:"/reference/environment-variables.html#deployment"}},[e._v("environment variable")]),e._v(" if desired.")],1),e._v(" "),o("p",[e._v("The encryption key of the main n8n instance must be shared with all worker and webhooks processor nodes to ensure these worker nodes are able to access credentials stored in the database.")]),e._v(" "),o("p",[e._v("Set the encryption key for each worker node in a "),o("RouterLink",{attrs:{to:"/getting-started/installation/advanced/configuration.html#configuration-via-file"}},[e._v("configuration file")]),e._v(" or by setting the corresponding environment variable:")],1),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_ENCRYPTION_KEY")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("main_instance_encryption_key"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),o("h3",{attrs:{id:"set-executions-mode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#set-executions-mode"}},[e._v("#")]),e._v(" Set executions mode")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Database considerations")]),e._v(" "),o("p",[e._v("We recommend using a database like MySQL or Postgres 13+. Running n8n with execution mode set to "),o("code",[e._v("queue")]),e._v(" with an SQLite database is not recommended.")])]),e._v(" "),o("p",[e._v("Set the "),o("RouterLink",{attrs:{to:"/reference/glossary.html#environment-variables"}},[e._v("environment variable")]),e._v(" "),o("code",[e._v("EXECUTIONS_MODE")]),e._v(" to "),o("code",[e._v("queue")]),e._v(" using the following command.")],1),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("EXECUTIONS_MODE")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("queue\n")])])]),o("p",[e._v("Alternatively, you can set "),o("code",[e._v("executions.mode")]),e._v(" to "),o("code",[e._v("queue")]),e._v(" in the "),o("RouterLink",{attrs:{to:"/getting-started/installation/advanced/configuration.html#configuration-via-file"}},[e._v("configuration file")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"start-redis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-redis"}},[e._v("#")]),e._v(" Start Redis")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),o("p",[e._v("You can run Redis on a separate machine, just make sure that it is accessible by the n8n instance.")])]),e._v(" "),o("p",[e._v("To run Redis in a Docker container, follow the instructions below.")]),e._v(" "),o("p",[e._v("Run the following command to start a Redis instance:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker run --name some-redis -p 6379:6379  -d redis\n")])])]),o("p",[e._v("By default, Redis runs on "),o("code",[e._v("localhost")]),e._v(" on port "),o("code",[e._v("6379")]),e._v(" with no password. Based on your Redis configuration, set the following configurations for the main n8n process. These will allow n8n to interact with Redis.")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Via configuration file")]),e._v(" "),o("th",[e._v("Via environment variables")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("queue.bull.redis.host:localhost")])]),e._v(" "),o("td",[o("code",[e._v("QUEUE_BULL_REDIS_HOST=localhost")])]),e._v(" "),o("td",[e._v("By default, Redis runs on "),o("code",[e._v("localhost")]),e._v(".")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("queue.bull.redis.port:6379")])]),e._v(" "),o("td",[o("code",[e._v("QUEUE_BULL_REDIS_PORT=6379")])]),e._v(" "),o("td",[e._v("The default port is "),o("code",[e._v("6379")]),e._v(". If Redis is running on a different port, configure the value.")])])])]),e._v(" "),o("p",[e._v("You can also set the following optional configurations:")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Via configuration file")]),e._v(" "),o("th",[e._v("Via environment variables")]),e._v(" "),o("th",[e._v("Description")])])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("queue.bull.redis.password:PASSWORD")])]),e._v(" "),o("td",[o("code",[e._v("QUEUE_BULL_REDIS_PASSWORD")])]),e._v(" "),o("td",[e._v("By default, Redis doesn’t require a password. If you’re using a password, configure it variable.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("queue.bull.redis.db:0")])]),e._v(" "),o("td",[o("code",[e._v("QUEUE_BULL_REDIS_DB")])]),e._v(" "),o("td",[e._v("The default value is "),o("code",[e._v("0")]),e._v(". If you change this value, update the configuration.")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("queue.bull.redis.timeoutThreshold:10000ms")])]),e._v(" "),o("td",[o("code",[e._v("QUEUE_BULL_REDIS_TIMEOUT_THRESHOLD")])]),e._v(" "),o("td",[e._v("Tells n8n how long it should wait if Redis is unavailable before exiting. The default value is "),o("code",[e._v("10000ms")]),e._v(".")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("queue.bull.queueRecoveryInterval:60")])]),e._v(" "),o("td",[o("code",[e._v("QUEUE_RECOVERY_INTERVAL")])]),e._v(" "),o("td",[e._v("Adds an active watchdog to n8n that checks Redis for finished executions. This is used to recover when n8n’s main process loses connection temporarily to Redis and is not notified about finished jobs. The default value is "),o("code",[e._v("60")]),e._v(" seconds.")])])])]),e._v(" "),o("p",[e._v("Now you can start your n8n instance and it will connect to your Redis instance.")]),e._v(" "),o("h3",{attrs:{id:"start-workers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#start-workers"}},[e._v("#")]),e._v(" Start workers")]),e._v(" "),o("p",[e._v("You will need to start worker processes to allow n8n to execute workflows. If you want to host workers on a separate machine, install n8n on the machine and make sure that it is connected to your Redis instance and the n8n database.")]),e._v(" "),o("p",[e._v("Start worker processes by running the following command from the root directory:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("./packages/cli/bin/n8n worker\n")])])]),o("p",[e._v("If you're using Docker, use the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker run --name n8n-queue -p 5679:5678 n8nio/n8n n8n worker\n")])])]),o("p",[e._v("You can set up multiple worker processes. Make sure that all the worker processes have access to Redis and the n8n database.")]),e._v(" "),o("h2",{attrs:{id:"running-n8n-with-queues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-n8n-with-queues"}},[e._v("#")]),e._v(" Running n8n with queues")]),e._v(" "),o("p",[e._v("When running n8n with queues, all the production workflow executions get processed by worker processes. This means that even the webhook calls get delegated to the worker processes, which might add some overhead and extra latency. However, the manual workflow executions still use the main process.")]),e._v(" "),o("p",[e._v("Redis is used as the message broker, and the database is used to persist data, so access to both is required. "),o("strong",[e._v("Running a distributed system with this setup over SQLite is not recommended.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Migrate data")]),e._v(" "),o("p",[e._v("If you want to migrate data from one database to another, you can use the Export and Import commands. Refer to the "),o("RouterLink",{attrs:{to:"/getting-started/reference/start-workflows-via-cli.html#export-workflows-and-credentials"}},[e._v("CLI commands for n8n")]),e._v(" documentation to learn how to use these commands.")],1)]),e._v(" "),o("h2",{attrs:{id:"webhook-processors"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#webhook-processors"}},[e._v("#")]),e._v(" Webhook processors")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),o("p",[e._v("Webhook processes rely on Redis too. Follow the "),o("a",{attrs:{href:"#configuring-workers"}},[e._v("configure the workers")]),e._v(" section above to setup webhook processor nodes.")])]),e._v(" "),o("p",[e._v("Webhook processors are another layer of scaling in n8n. Configuring the webhook processor is optional, and allows you to scale the incoming webhook requests.")]),e._v(" "),o("p",[e._v("This method allows n8n to process a huge number of parallel requests. All you have to do is add more webhook processes and workers accordingly. The webhook process will listen to requests on the same port (default: "),o("code",[e._v("5678")]),e._v("). Run these processes in containers or separate machines, and have a load balancing system to route requests accordingly.")]),e._v(" "),o("p",[e._v("We do not recommend adding the main process to the load balancer pool. If the main process is added to the pool, it will receive requests and possibly a heavy load. This will result in degraded performance for editing, viewing, and interacting with the n8n UI.")]),e._v(" "),o("p",[e._v("You can start the webhook processor by executing the following command from the root directory:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("./packages/cli/bin/n8n webhook\n")])])]),o("p",[e._v("If you're using Docker, use the following command:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker run --name n8n-queue -p 5679:5678 n8nio/n8n n8n webhook\n")])])]),o("h3",{attrs:{id:"configure-webhook-url"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-webhook-url"}},[e._v("#")]),e._v(" Configure webhook URL")]),e._v(" "),o("p",[e._v("To configure your webhook URL, execute the following command on the machine running the main n8n instance:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WEBHOOK_URL")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("https://your-webhook-url.com\n")])])]),o("p",[e._v("You can also set this value in the configuration file.")]),e._v(" "),o("h3",{attrs:{id:"configure-load-balancer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configure-load-balancer"}},[e._v("#")]),e._v(" Configure load balancer")]),e._v(" "),o("p",[e._v("When using multiple webhook processes you will need a load balancer to route requests. If you are using the same domain name for your n8n instance and the webhooks, you can set up your load balancer to route requests as follows:")]),e._v(" "),o("ul",[o("li",[e._v("Redirect any request that matches "),o("code",[e._v("/webhook/*")]),e._v(" to the webhook servers pool")]),e._v(" "),o("li",[e._v("All other paths (the n8n internal API, the static files for the editor, etc.) should get routed to the main process")])]),e._v(" "),o("p",[o("strong",[e._v("Note:")]),e._v(" Manual workflow executions still occur on the main process and the default URL for these is "),o("code",[e._v("/webhook-test/*")]),e._v(". Make sure that these URLs route to your main process.")]),e._v(" "),o("p",[e._v("You can change this path in the configuration file via "),o("code",[e._v("endpoints.webhook")]),e._v(" or via the "),o("code",[e._v("N8N_ENDPOINT_WEBHOOK")]),e._v(" environment variable. If you change these, update your load balancer accordingly.")]),e._v(" "),o("h3",{attrs:{id:"disable-webhook-processing-in-the-main-process-optional"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#disable-webhook-processing-in-the-main-process-optional"}},[e._v("#")]),e._v(" Disable webhook processing in the main process (optional)")]),e._v(" "),o("p",[e._v("You have webhook processors to execute the workflows. You can disable the webhook processing in the main process. This will make sure to execute all webhook executions in the webhook processors. In the configuration file set "),o("code",[e._v("endpoints.disableProductionWebhooksOnMainProcess")]),e._v(" to "),o("code",[e._v("true")]),e._v(" so that n8n does not process webhook requests on the main process.")]),e._v(" "),o("p",[e._v("Alternatively, you can use the following command:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_DISABLE_PRODUCTION_MAIN_PROCESS")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),o("p",[e._v("When disabling the webhook process in the main process, run the main process and don't add it to the load balancer's webhook pool.")]),e._v(" "),o("h2",{attrs:{id:"avoiding-downtime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#avoiding-downtime"}},[e._v("#")]),e._v(" Avoiding downtime")]),e._v(" "),o("p",[e._v("When it comes to startup and shutdown, n8n will stop all currently executing workflows, disconnect from sources, and deregister webhooks that might have been registered with third-party services. All this happens inside the main process.")]),e._v(" "),o("p",[e._v("A new configuration has been added to n8n that allows it to skip deregistering of webhooks during the shutdown. Whenever n8n starts back, this configuration will check for existing webhooks. If a webhook exists, it will not be registered again.")]),e._v(" "),o("p",[e._v("Trigger nodes that do not use HTTP requests will still suffer marginal downtime during the update process.")]),e._v(" "),o("p",[e._v("The setting that controls this behavior is "),o("code",[e._v("endpoint.skipWebhoooksDeregistrationOnShutdown")]),e._v(". It defaults to "),o("code",[e._v("false")]),e._v(" but can be changed:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("N8N_SKIP_WEBHOOK_DEREGISTRATION_SHUTDOWN")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("true\n")])])]),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),o("p",[e._v("Do not use this procedure for blue/green installations, where you have two n8n instances running simultaneously, but only one is receiving active traffic. If you run two or more main processes simultaneously, the currently active instance gets notified of activation and deactivation of workflows. This can potentially cause duplication of work or even skipping workflows entirely.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);