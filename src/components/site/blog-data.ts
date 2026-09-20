export type BlogSection = { heading: string; paragraphs: string[] };
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
  content: BlogSection[];
};

const make = (
  slug: string,
  title: string,
  excerpt: string,
  date: string,
  category: string,
  image: string,
  readTime: string,
  content: BlogSection[],
  featured = false,
): BlogPost => ({ slug, title, excerpt, date, category, image, readTime, content, featured });

export const blogPosts: BlogPost[] = [
  make("sendafrica-api-v2-sms-billing-changes", "API v2: what changed in SMS billing and idempotency", "Credits, parts, and idempotency keys — how SendAfrica charges exactly and how retries stay safe.", "September 21, 2026", "SMS API", "/images/blog/sendafrica-api-v2-sms-billing-changes.svg", "7 min read", [
    { heading: "A send has two separate questions", paragraphs: ["An SMS API request asks the platform to submit a message. Billing asks how many SMS parts the text requires. One API request can consume multiple credits when the message spans multiple parts.", "SendAfrica returns `credits_used` with the send result. Treat that server value as authoritative instead of estimating from JavaScript string length."] },
    { heading: "Make retries safe", paragraphs: ["A timeout can leave your application unsure whether a request reached the server. When an endpoint supports `Idempotency-Key`, retry the same logical operation with the same key. A new key describes a new operation and can send a second message.", "Use a stable reference from your workflow, such as an order confirmation ID, and keep it scoped to one account and one intended action."] },
    { heading: "Check the outcome", paragraphs: ["A successful provider submission means the message was accepted for processing. It does not prove delivery to a handset. Keep the message ID and request ID, then follow the message log and delivery callback."] },
  ], true),
  make("building-tanzania-first-sms-infrastructure", "Building SMS infrastructure", "How SendAfrica normalizes Tanzanian mobile numbers and recovers campaigns after worker interruptions.", "September 14, 2026", "Infrastructure", "/images/blog/building-tanzania-first-sms-infrastructure.svg", "8 min read", [
    { heading: "Normalize before routing", paragraphs: ["Tanzania users encounter local `06…` and `07…` numbers as well as international `+255…` form. The API and SDK utilities normalize supported Tanzanian mobile inputs to E.164 and validate the mobile ranges. Tanzanian landline ranges are not valid mobile recipients.", "For destinations outside Tanzania, consult the live rate and destination endpoints. Syntactic validity alone does not establish international coverage."] },
    { heading: "Campaign execution is a separate worker", paragraphs: ["The API persists campaign state, while a separately run worker processes scheduled work. It checks for due campaigns on a 30-second loop, takes a Redis lock, and processes recipients in bounded chunks.", "If a worker is interrupted, stale processing campaigns can be recovered. Previously attempted recipients are read from message logs and skipped."] },
    { heading: "Reliability needs visible outcomes", paragraphs: ["Campaign summaries are derived from message records so progress can be reconciled with the messages that produced it. Inspect recipient-level records when diagnosing partial progress."] },
  ], true),
  make("mobile-money-top-ups-snippe-webhooks", "Mobile money top-ups: how Snippe webhooks grant credits", "From USSD prompt to signed callback to a posted credit balance.", "September 7, 2026", "Payments", "/images/blog/mobile-money-top-ups-snippe-webhooks.svg", "6 min read", [
    { heading: "Starting a top-up is not completing one", paragraphs: ["A voucher request creates a payment order and starts the selected payment flow. For mobile money, the user may receive a USSD prompt. The order remains pending until a valid payment event is confirmed."] },
    { heading: "Verify the callback before granting value", paragraphs: ["The Snippe webhook handler verifies an HMAC-SHA256 signature over the timestamp and exact raw JSON body, applies a five-minute replay tolerance, and compares signatures in constant time. Only after verification should the payment event drive the order transition and credit grant.", "Never parse and re-serialize the body before computing its signature: the signed bytes are the original request bytes."] },
    { heading: "Reconcile the result", paragraphs: ["A completed order posts a credit transaction through the shared credit mutation path. Check the order state and account balance after the callback; do not grant credits from a browser redirect or unverified client claim."] },
  ], true),
  make("sender-id-registration-what-you-need", "Sender ID registration: documents and rules", "How to check the live requirements and submit a branded Sender ID request.", "August 28, 2026", "Sender IDs", "/images/blog/sender-id-registration-what-you-need.svg", "5 min read", [
    { heading: "Discover current requirements first", paragraphs: ["Sender ID eligibility and required documents are provider- and country-specific. Fetch the requirements endpoint before preparing a request, then submit the documents and sample message it specifies."] },
    { heading: "A request is reviewed", paragraphs: ["Submitting a Sender ID creates a request that can be pending, approved, rejected, or suspended, with additional lifecycle states in the backend. Use the API status and reason rather than guessing from the display name.", "Reserved names include ADMIN and OTP, alongside other protected names. Registration requests are not a purchase and do not deduct SMS credits."] },
    { heading: "Use a usable sender", paragraphs: ["A sender can be used when it is a platform default or a custom approved ID marked usable and not suspended. Check the usable endpoint before sending."] },
  ]),
  make("gsm-7-vs-ucs-2-why-your-message-split", "GSM-7 vs UCS-2: why your message split into parts", "Encoding and concatenation headers change the part count behind SMS credit usage.", "August 19, 2026", "SMS billing", "/images/blog/gsm-7-vs-ucs-2-why-your-message-split.svg", "6 min read", [
    { heading: "Encoding changes the segment size", paragraphs: ["A GSM-7 single-part SMS holds up to 160 septets; concatenated messages use 153 septets per part. UCS-2 holds up to 70 UTF-16 code units in one part and 67 per part when concatenated.", "Some GSM-7 extension characters consume two septets. Emoji and characters outside GSM-7 can switch a message to Unicode, so visible character count alone is not a reliable estimate."] },
    { heading: "Preview locally, trust the server result", paragraphs: ["SDK local analysis can preview encoding and estimated parts. The send response's `credits_used` remains the source of truth for the actual operation."] },
    { heading: "Test the exact message", paragraphs: ["If a notification is close to a boundary, shortening it can avoid an additional part. Analyze the exact punctuation and localized characters before deploying a template."] },
  ]),
  make("api-key-rotation-and-security", "API key rotation and security best practices", "Store SA-prefixed API keys safely, rotate them cleanly, and keep secrets out of client code.", "August 11, 2026", "Security", "/images/blog/api-key-rotation-and-security.svg", "5 min read", [
    { heading: "Treat API keys as passwords", paragraphs: ["SendAfrica API keys use the `SA-` prefix and are stored hashed by the API. The full key is shown once when created; later views expose only a prefix. Put it in a server-side secret manager or environment variable, never browser code or a committed file."] },
    { heading: "Rotate by replacing", paragraphs: ["If a key is lost or exposed, create a replacement, move the application to it, verify the integration, and revoke the old key. The original secret cannot be redisplayed."] },
    { heading: "Separate credentials by use", paragraphs: ["Use API keys for programmatic operations and JWTs for session or key-management flows that require one. Keep development and production credentials separate and redact authorization headers from logs."] },
  ]),
  make("campaign-worker-crash-resume", "Crash-resume: how the campaign worker avoids duplicate recipients", "Redis locks, durable message records, and recovery when a campaign worker stops.", "August 3, 2026", "Campaigns", "/images/blog/campaign-worker-crash-resume.svg", "8 min read", [
    { heading: "A lock coordinates workers", paragraphs: ["Workers poll for due campaigns and acquire a Redis `SETNX` lock with a bounded TTL before processing. Multiple worker processes can share a queue without intentionally processing the same campaign at once."] },
    { heading: "Stale processing can resume", paragraphs: ["The worker can rediscover campaigns that remain in `processing` beyond the recovery window. Before resending, it loads numbers already associated with that campaign's message logs and skips those recipients."] },
    { heading: "Durable records enable recovery", paragraphs: ["Each attempted recipient gets message-level accounting and campaign linkage. Inspect those records when checking partial progress or diagnosing a resumed campaign."] },
  ]),
  make("credit-ledger-atomic-idempotent", "The credit ledger: atomic, idempotent, never stale", "How SendAfrica records credit mutations and keeps balance reads current.", "July 26, 2026", "Credits", "/images/blog/credit-ledger-atomic-idempotent.svg", "7 min read", [
    { heading: "Balance is derived from ledger transactions", paragraphs: ["The credit ledger records mutations as transactions. Account balance is derived from the latest completed ledger state instead of relying on an independently updated counter."] },
    { heading: "One mutation path handles concurrency", paragraphs: ["`TransactCredits` checks its idempotency key inside a database transaction, locks the latest transaction row, prevents a deduction from making balance negative, writes the transaction, and commits."] },
    { heading: "Cache reads and invalidate after writes", paragraphs: ["Balance reads use a Redis cache with a 30-second TTL. Mutations invalidate that cache after commit, so a successful write need not wait for normal expiry to become visible."] },
  ]),
  make("payg-vouchers-tiered-tariffs", "Pay-as-you-go vouchers and tiered TZS tariffs", "Use the live rate endpoint to explain custom amount top-ups and credit estimates.", "July 18, 2026", "Payments", "/images/blog/payg-vouchers-tiered-tariffs.svg", "6 min read", [
    { heading: "Read the live rate before quoting", paragraphs: ["Custom voucher amounts use a configurable tier rate to calculate credits with integer division. Documented defaults use 35, 32, and 30 TZS per credit across increasing amount bands, but configuration and packages can change."] },
    { heading: "Use the rate and package endpoints", paragraphs: ["Call `GET /v1/vouchers/rate` for active custom voucher tiers and `GET /v1/packages` for fixed packages. Avoid hard-coding these values as permanent facts."] },
    { heading: "Explain what an estimate means", paragraphs: ["Credits are not always identical to recipients reached: encoding, message length, and destination rates can affect usage. Show the current rate and scope before a buyer confirms payment."] },
  ]),
  make("send-your-first-sms-with-curl", "Send your first SMS with curl", "A safe first request using the SendAfrica REST API and an environment-based key.", "July 9, 2026", "Getting started", "/images/blog/send-your-first-sms-with-curl.svg", "5 min read", [
    { heading: "Prepare a key and destination", paragraphs: ["Create an API key in the dashboard and store it in a server-side environment variable. Choose a test destination you control; this request can send a real SMS and consume credits."] },
    { heading: "Make the request", paragraphs: ["Send `POST /v1/sms/` with a JSON body containing `to` and `message`, plus the `X-API-Key` header. Keep the key out of the command history by sourcing it from your environment."] },
    { heading: "Verify the result", paragraphs: ["Inspect `message_id`, `credits_used`, and `request_id` in the response. Provider acceptance is not final delivery; use message logs or delivery callbacks to confirm later status."] },
  ]),
  make("bulk-sms-api-partial-results", "Bulk SMS API: reading per-recipient results", "One request can target up to 1,000 recipients and report outcomes for each number.", "June 30, 2026", "Bulk SMS", "/images/blog/bulk-sms-api-partial-results.svg", "7 min read", [
    { heading: "Choose bulk for a bounded audience", paragraphs: ["`POST /v1/sms/bulk` accepts a message and a non-empty `to` list, with a maximum of 1,000 recipients per call. Larger audiences should use the campaigns workflow."] },
    { heading: "Expect partial success", paragraphs: ["A valid batch can return per-recipient results where some numbers succeed and others fail. Handle each result independently; a whole-request error is different from a recipient-level failure."] },
    { heading: "Make retries deliberate", paragraphs: ["Bulk send supports `Idempotency-Key` so a retry can replay the whole batch result. Reuse the same key for the same logical batch, and do not blindly retry after an uncertain outcome without checking the response or logs."] },
  ]),
  make("bulk-sms-or-campaign", "Bulk SMS API or campaign: which should you use?", "Pick a synchronous batch for a bounded send and a campaign for larger, tracked delivery work.", "June 22, 2026", "Bulk SMS", "/images/blog/bulk-sms-or-campaign.svg", "6 min read", [
    { heading: "Use bulk for an immediate bounded batch", paragraphs: ["The bulk endpoint is limited to 1,000 recipients and returns per-recipient outcomes in its response. It suits an application that already has a specific short recipient list and wants to handle those results directly."] },
    { heading: "Use campaigns for larger audience workflows", paragraphs: ["Campaigns attach a contact list to a durable campaign record, can be scheduled, and expose recipient tracking and aggregate progress. The separate worker handles execution and recovery."] },
    { heading: "Review before executing", paragraphs: ["Both workflows can send real messages and consume credits. Confirm list membership, message content, sender, and expected cost before making the write request."] },
  ]),
  make("python-sdk-send-sms", "Send SMS with the Python SDK", "Initialize SendAfrica once, send from a server-side app, and inspect the result.", "June 15, 2026", "Python SDK", "/images/blog/python-sdk-send-sms.svg", "5 min read", [
    { heading: "Install and configure", paragraphs: ["Install the `sendafrica` package and set `SENDAFRICA_API_KEY` in your runtime environment. Create the client without embedding the credential in source control."] },
    { heading: "Send with the resource client", paragraphs: ["Call `client.sms.send(to=..., message=...)`. The SDK normalizes supported Tanzania phone formats locally and returns a typed result including message ID, status, and credits used."] },
    { heading: "Handle errors and delivery", paragraphs: ["Catch the SDK's `SendAfricaError` family for API failures. The returned send status reflects provider submission; use logs or callbacks for later delivery status."] },
  ]),
  make("typescript-sdk-bulk-sms", "Bulk SMS with the TypeScript SDK", "Use the typed bulk resource and handle recipient-level outcomes in Node.js.", "June 6, 2026", "TypeScript SDK", "/images/blog/typescript-sdk-bulk-sms.svg", "6 min read", [
    { heading: "Create a server-side client", paragraphs: ["Install the SendAfrica TypeScript package and construct the client with an environment-provided API key. Do not expose the key through a `NEXT_PUBLIC_` variable or browser bundle."] },
    { heading: "Submit a bounded batch", paragraphs: ["Call `client.sms.bulk` with the recipient array and shared message. The API allows up to 1,000 recipients in a server-side bulk request; larger list workflows belong in campaigns."] },
    { heading: "Process each result", paragraphs: ["Bulk responses represent per-recipient success and failure. Persist the results you need for your workflow, and use the same idempotency key if replaying the same logical request."] },
  ]),
  make("go-sdk-retries-and-idempotency", "Go SDK retries and idempotency keys", "Keep transport retries from becoming duplicate business actions in Go.", "May 28, 2026", "Go SDK", "/images/blog/go-sdk-retries-and-idempotency.svg", "7 min read", [
    { heading: "Transport retries are not business identity", paragraphs: ["The Go client retries transient connection errors and selected HTTP statuses with backoff and honors a longer `Retry-After`. That handles transport conditions; your application still needs a stable idempotency key for a state-changing operation."] },
    { heading: "Reuse a deterministic key", paragraphs: ["Pass `RequestOptions{IdempotencyKey: ...}` using a stable workflow identifier, such as an order confirmation. Do not generate a different key every time you retry the same operation."] },
    { heading: "Log request IDs", paragraphs: ["The response and API errors include request identifiers that help trace an issue. Record those IDs while redacting the API key and personal data."] },
  ]),
  make("sendafrica-cli-first-send", "SendAfrica CLI: from health check to first send", "Install the CLI, configure credentials safely, and verify API access before sending.", "May 19, 2026", "CLI", "/images/blog/sendafrica-cli-first-send.svg", "6 min read", [
    { heading: "Install and check the service", paragraphs: ["Install the Go CLI and run `sendafrica health` before configuring a send. Public commands such as packages and rates can help inspect current service information."] },
    { heading: "Configure credentials safely", paragraphs: ["The CLI resolves credentials from flags, environment variables, and a permission-restricted profile file. Prefer environment variables or a saved profile over putting a secret in shell history."] },
    { heading: "Send only after reviewing", paragraphs: ["`sendafrica sms-send` submits a real message. Confirm the destination and content first, then inspect the returned message and later delivery logs."] },
  ]),
  make("api-keys-vs-jwt", "API keys vs JWTs: choosing the right SendAfrica credential", "Understand server-to-server keys and dashboard session tokens without mixing their roles.", "May 11, 2026", "Authentication", "/images/blog/api-keys-vs-jwt.svg", "6 min read", [
    { heading: "Use API keys for integrations", paragraphs: ["An API key is the usual credential for server-to-server messaging and account-scoped developer endpoints. Send it in the `X-API-Key` header and keep it on a trusted server."] },
    { heading: "Use JWT for account session flows", paragraphs: ["A dashboard session uses JWT bearer tokens. Credential lifecycle operations such as creating or revoking API keys remain JWT-only, as do sensitive account security and admin operations."] },
    { heading: "Respect endpoint auth", paragraphs: ["Not every route accepts every credential type. Check the route's auth column in current API docs rather than assuming one credential works everywhere."] },
  ]),
  make("webhook-delivery-status", "Delivery webhooks: update message state safely", "Verify callbacks, handle duplicates, and distinguish accepted SMS from delivery reports.", "May 2, 2026", "Webhooks", "/images/blog/webhook-delivery-status.svg", "7 min read", [
    { heading: "A send response is not a delivery receipt", paragraphs: ["The initial API response reports submission and identifies the message. Final delivery information can arrive asynchronously from provider callbacks and update the message log."] },
    { heading: "Treat callbacks as retryable input", paragraphs: ["Providers may retry callbacks when your handler does not acknowledge successful processing. Make callback handling idempotent and avoid applying a duplicate status transition twice."] },
    { heading: "Return success after durable processing", paragraphs: ["Validate the incoming event, apply the valid state transition, and persist it before acknowledging. Preserve request and provider message identifiers for diagnosis."] },
  ]),
  make("idempotency-key-design", "Designing idempotency keys for SMS workflows", "Choose stable operation identifiers so safe retries replay the intended result.", "April 24, 2026", "Reliability", "/images/blog/idempotency-key-design.svg", "6 min read", [
    { heading: "Name the business operation", paragraphs: ["An idempotency key should identify one logical action, such as sending an order receipt. Use a stable order/event ID, not a random value created for every network attempt."] },
    { heading: "Keep scope and payload aligned", paragraphs: ["Do not reuse a key for an unrelated recipient or message. The API scopes idempotency to the account and operation type; your application should make the key's business meaning equally clear."] },
    { heading: "Resolve uncertain outcomes", paragraphs: ["On timeout, retry with the same key or inspect the message log before deciding to create a new operation. A new key can legitimately send again."] },
  ]),
  make("contact-lists-and-csv-import", "Contact lists and CSV import for SMS", "Prepare a clean contact list and understand how imported Tanzania numbers are handled.", "April 16, 2026", "Contacts", "/images/blog/contact-lists-and-csv-import.svg", "6 min read", [
    { heading: "Keep a stable list purpose", paragraphs: ["Contact lists group recipients for search, export, and campaign workflows. Choose a clear list name and retain a source record so operators know why contacts were collected."] },
    { heading: "Validate phone data", paragraphs: ["Use the documented CSV format and normalize supported Tanzanian mobile numbers. Invalid rows should be reviewed rather than silently treated as deliverable recipients."] },
    { heading: "Protect personal data", paragraphs: ["Import only contacts your organization is authorized to message. Restrict exported CSV files, avoid adding real customer phone numbers to tutorials, and review the final audience before a campaign."] },
  ]),
  make("campaign-scheduling-and-time", "Campaign scheduling and time zones", "Create a scheduled campaign with an explicit time and verify when the worker will pick it up.", "April 7, 2026", "Campaigns", "/images/blog/campaign-scheduling-and-time.svg", "6 min read", [
    { heading: "Send an explicit timestamp", paragraphs: ["Campaign creation accepts `scheduled_at`. Include an ISO-8601 timestamp with an explicit UTC offset so your system and operators agree on the intended send time."] },
    { heading: "Understand pickup cadence", paragraphs: ["The campaign worker polls every 30 seconds, so execution begins on a subsequent poll after the campaign is due. This is not a precise second-level scheduler."] },
    { heading: "Check state and recipients", paragraphs: ["After creation, read campaign detail and recipient stats to confirm the state and audience. Remember that the campaign can send real SMS when the due time arrives."] },
  ]),
  make("sms-api-error-handling", "SMS API errors: auth, credits, validation, and rate limits", "Build useful recovery paths for common SendAfrica API failures.", "March 30, 2026", "SMS API", "/images/blog/sms-api-error-handling.svg", "7 min read", [
    { heading: "Classify before retrying", paragraphs: ["Authentication errors need a credential or permission fix. Validation errors need corrected input. Insufficient credits needs a top-up or smaller send. Rate limiting may include a retry delay."] },
    { heading: "Retry only transient failures", paragraphs: ["Do not retry a malformed request unchanged. For transient connection, 429, or selected server errors, use bounded backoff and preserve the same idempotency key for the same write."] },
    { heading: "Keep request IDs", paragraphs: ["Capture the request ID and stable error code in logs. Redact secrets, recipient details, and message contents from public issue reports."] },
  ]),
  make("international-sms-rates", "Sending SMS beyond Tanzania: check the live rate card", "Use supported destination data rather than assuming a fixed African SMS price.", "March 21, 2026", "International SMS", "/images/blog/international-sms-rates.svg", "5 min read", [
    { heading: "Look up supported destinations", paragraphs: ["The public rates endpoints list supported countries and customer price per SMS part. Query the destination before presenting a quote or sending internationally."] },
    { heading: "Keep provider reference data separate", paragraphs: ["Where the rate response includes provider pricing snapshots, those are informational and do not automatically replace the customer rate. Explain which number your application displays."] },
    { heading: "Reconcile after the send", paragraphs: ["Provider costs may only be known after submission. Review the message response and logs for operational outcomes; never promise delivery based on a rate lookup."] },
  ]),
  make("sender-id-usable-vs-registered", "Registered Sender IDs vs usable Sender IDs", "Why a pending registration request is not automatically a sender you can use.", "March 12, 2026", "Sender IDs", "/images/blog/sender-id-usable-vs-registered.svg", "4 min read", [
    { heading: "Registration is a lifecycle", paragraphs: ["A registered Sender ID request can be pending, approved, rejected, or suspended. Listing registrations helps track review; it does not mean every item is valid for a send."] },
    { heading: "Use the usable endpoint", paragraphs: ["The usable view combines platform defaults with eligible approved custom IDs. Select from that response and respect account ownership and suspension state."] },
    { heading: "Registration has no SMS charge", paragraphs: ["A Sender ID request is free and does not deduct messaging credits. It still requires accurate business information and the documents specified by current requirements."] },
  ]),
  make("message-logs-and-delivery-debugging", "Debugging delivery with message logs", "Trace an SMS using message IDs, status, recipient, credits, and request identifiers.", "March 3, 2026", "Observability", "/images/blog/message-logs-and-delivery-debugging.svg", "6 min read", [
    { heading: "Start with the message ID", paragraphs: ["Use the send response's message ID to correlate the operation with message logs. The request ID is useful for tracing an API call, while the provider message ID can help reconcile gateway callbacks."] },
    { heading: "Separate submission from delivery", paragraphs: ["A `sent` or accepted result may precede a delivery callback. Read the current status and timestamps rather than assuming the first response is final."] },
    { heading: "Use safe diagnostics", paragraphs: ["Share error codes and redacted IDs when troubleshooting. Do not paste API keys, full recipient numbers, or sensitive message bodies into tickets."] },
  ]),
  make("sms-parts-local-estimates", "Why SDK SMS part estimates can differ", "GSM-7 extension characters, Unicode code units, and normalization all affect exact billing.", "February 22, 2026", "SMS billing", "/images/blog/sms-parts-local-estimates.svg", "6 min read", [
    { heading: "A visible character is not always one septet", paragraphs: ["Some GSM-7 extension characters use an escape plus a character, consuming two septets. Emoji may use two UTF-16 code units and can switch encoding entirely."] },
    { heading: "Normalization matters", paragraphs: ["Smart punctuation normalization can affect the exact message text counted and submitted. A simple regular expression or `message.length` can disagree with server calculation."] },
    { heading: "Treat local analysis as a preview", paragraphs: ["SDK analyzers help users understand likely segmentation. Confirm the final charge from `credits_used` in the send response and review message logs for the recorded result."] },
  ]),
  make("snippe-webhook-signature-verification", "Verify Snippe webhook signatures in Go", "Validate the timestamped HMAC against the exact request bytes before processing a payment event.", "February 13, 2026", "Webhooks", "/images/blog/snippe-webhook-signature-verification.svg", "7 min read", [
    { heading: "Read and retain the raw body", paragraphs: ["The payment signature is an HMAC-SHA256 over the timestamp, a dot, and the raw JSON body. Read the body once and use those exact bytes for verification."] },
    { heading: "Check replay time and compare safely", paragraphs: ["Reject timestamps outside the five-minute tolerance and use constant-time comparison for the expected signature. Parse JSON only after verification succeeds."] },
    { heading: "Make payment transitions idempotent", paragraphs: ["Webhook delivery may repeat. Ensure the order transition and credit grant cannot apply twice, and acknowledge only after the durable operation succeeds."] },
  ]),
  make("rate-limits-and-retry-after", "Rate limits and Retry-After for SMS integrations", "Respect account plan limits and pace sends instead of flooding the API.", "February 4, 2026", "Reliability", "/images/blog/rate-limits-and-retry-after.svg", "5 min read", [
    { heading: "Know which limit applies", paragraphs: ["Rate limits vary by account plan for plan-gated endpoints; public auth endpoints have separate IP-based limits. Consult current API docs for the route you're calling."] },
    { heading: "Back off when asked", paragraphs: ["When a 429 response includes `Retry-After`, wait at least that long before retrying. Add bounded backoff and avoid synchronizing many workers to retry at the same instant."] },
    { heading: "Use campaigns for audience delivery", paragraphs: ["A campaign workflow is usually a better fit for a large contact audience than a loop that fires thousands of independent HTTP requests."] },
  ]),
  make("campaign-partial-failure-and-credits", "Campaign partial failures and credit refunds", "Read recipient results and understand how failed SMS attempts affect credit accounting.", "January 26, 2026", "Campaigns", "/images/blog/campaign-partial-failure-and-credits.svg", "7 min read", [
    { heading: "One campaign can have different recipient outcomes", paragraphs: ["Phone validation, provider submission, and later delivery callbacks happen per recipient. A campaign can therefore complete its processing while containing failed or unreached recipients, with visible reasons and counts."] },
    { heading: "Refunds are tied to definitive failures", paragraphs: ["The SMS service refunds credits for immediate provider errors and definitive late delivery failures through idempotent ledger operations. Pending delivery states are not proof of success or failure."] },
    { heading: "Reconcile using the message log", paragraphs: ["Inspect campaign recipient rows and message logs to reconcile charges, refunds, and delivery states. Avoid treating an aggregate status as a substitute for recipient-level evidence."] },
  ]),
  make("bulk-sms-provider-gateways", "How provider capabilities shape bulk SMS", "SendAfrica uses provider bulk endpoints when available and falls back to recipient sends when needed.", "January 17, 2026", "Bulk SMS", "/images/blog/bulk-sms-provider-gateways.svg", "6 min read", [
    { heading: "The public API stays stable", paragraphs: ["A client submits one bulk request to SendAfrica. Internally, the service checks whether the configured gateway path supports a provider bulk operation."] },
    { heading: "Bulk-capable and fallback paths", paragraphs: ["A bulk-capable gateway can receive a batch in one provider call. A non-bulk fallback chain fans out per recipient while preserving separate logs, credit deductions, and failures."] },
    { heading: "Per-recipient accounting remains important", paragraphs: ["Transport batching changes provider round trips, not the need to account for each recipient independently. Interpret response results as individual outcomes."] },
  ]),
];

export const featuredPosts = blogPosts.filter((post) => post.featured);
export const popularPosts = blogPosts.filter((post) => !post.featured).slice(0, 6);
export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
