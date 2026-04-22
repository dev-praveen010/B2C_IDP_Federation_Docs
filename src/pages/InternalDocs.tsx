import DocSection from '../components/DocSection';
import InfoTable from '../components/InfoTable';
import StepCard from '../components/StepCard';
import Callout from '../components/Callout';
import CodeBlock from '../components/CodeBlock';
import ChecklistCard from '../components/ChecklistCard';

export default function InternalDocs() {
  return (
    <div>
      {/* ───────────── DEMO REPO BANNER ───────────── */}
      <div className="mx-auto mb-2">
        <a
          href="https://github.com/dev-praveen010/Auth0_B2C_IDP_Fedaration"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-5 py-3 bg-gray-900 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors group"
        >
          <svg className="w-5 h-5 text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
              Demo Repository — dev-praveen010/Auth0_B2C_IDP_Fedaration
            </p>
            <p className="text-xs text-gray-400 truncate">
              github.com/dev-praveen010/Auth0_B2C_IDP_Fedaration · my-app/ (frontend) · backend/ (Python API) · custompolicy files/ (IEF XML)
            </p>
          </div>
          <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* ───────────── OVERVIEW ───────────── */}
      <DocSection
        id="int-overview"
        title="B2C Federation — Internal Overview"
        subtitle="How INextLabs sets up Azure AD B2C with Auth0 federation"
        badge="Internal Only"
      >
        <p className="text-gray-700 leading-relaxed mb-6">
          This documentation covers everything the INextLabs engineering team
          needs to set up Azure AD B2C federated authentication with Auth0 as
          an external Identity Provider (IDP). It also covers the client
          onboarding process — what information we collect from clients and
          what credentials we provide back to them.
        </p>

        <InfoTable
          headers={['Component', 'Technology', 'Role']}
          rows={[
            ['Identity Platform', 'Azure AD B2C', 'Central auth server + token issuer'],
            ['External IDP', 'Auth0', 'Handles actual user authentication'],
            ['Custom Policies', 'IEF (Identity Experience Framework)', 'Controls auth flow logic'],
            ['Frontend', 'React + Vite', "Client's user interface"],
            ['Backend', 'Python FastAPI / Node.js', 'Token exchange server'],
          ]}
          striped
        />
      </DocSection>

      {/* ───────────── ARCHITECTURE ───────────── */}
      <DocSection
        id="int-architecture"
        title="System Architecture"
        subtitle="Complete federation flow from login to token"
      >
        {/* SVG Flow Diagram */}
        <div className="my-6 overflow-x-auto">
          <div className="flex items-center gap-2 min-w-[900px] py-4">
            {/* User Browser */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-3 bg-gray-200 border-2 border-gray-400 rounded-lg text-center min-w-[110px]">
                <span className="text-xs font-semibold text-gray-700">User Browser</span>
              </div>
            </div>
            <span className="text-gray-400 text-lg">→→</span>

            {/* React Frontend */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-3 bg-blue-100 border-2 border-blue-400 rounded-lg text-center min-w-[120px]">
                <span className="text-xs font-semibold text-blue-700">React Frontend</span>
              </div>
            </div>
            <span className="text-gray-400 text-lg">→→</span>

            {/* Azure AD B2C */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-3 bg-blue-600 border-2 border-blue-700 rounded-lg text-center min-w-[120px]">
                <span className="text-xs font-semibold text-white">Azure AD B2C</span>
              </div>
            </div>
            <span className="text-gray-400 text-lg">→→</span>

            {/* Auth0 */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-3 bg-orange-100 border-2 border-orange-400 rounded-lg text-center min-w-[100px]">
                <span className="text-xs font-semibold text-orange-700">Auth0</span>
              </div>
            </div>
            <span className="text-gray-400 text-lg">→→</span>

            {/* B2C (return) */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-3 bg-blue-600 border-2 border-blue-700 rounded-lg text-center min-w-[80px]">
                <span className="text-xs font-semibold text-white">B2C</span>
              </div>
            </div>
            <span className="text-gray-400 text-lg">→→</span>

            {/* Client Backend */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-3 bg-emerald-100 border-2 border-emerald-400 rounded-lg text-center min-w-[120px]">
                <span className="text-xs font-semibold text-emerald-700">Client Backend</span>
              </div>
            </div>
            <span className="text-gray-400 text-lg">→→</span>

            {/* React Frontend (return) */}
            <div className="flex flex-col items-center">
              <div className="px-4 py-3 bg-blue-100 border-2 border-blue-400 rounded-lg text-center min-w-[120px]">
                <span className="text-xs font-semibold text-blue-700">React Frontend</span>
              </div>
            </div>
          </div>
        </div>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'User Initiates Login',
              description:
                'User clicks login button in React app. React builds B2C authorize URL with redirect_uri pointing to the frontend callback route.',
            },
            {
              number: 2,
              title: 'B2C Authorize Request',
              description:
                'Browser redirects to Azure B2C login page. The authorize request uses the frontend callback URI (for example http://localhost:5173/callback).',
            },
            {
              number: 3,
              title: 'B2C Federates to Auth0',
              description:
                'B2C custom policy calls Auth0 as backend service using client_secret stored in B2C_1A_Auth0ClientASecret policy key. Auth0 must be Regular Web Application type (NOT SPA).',
            },
            {
              number: 4,
              title: 'Auth0 Authenticates User',
              description:
                'Auth0 shows login UI and authenticates user. Redirects back to B2C with authorization code.',
            },
            {
              number: 5,
              title: 'B2C Issues Authorization Code',
              description:
                'B2C redirects to frontend /callback route with authorization code in query params.',
            },
            {
              number: 6,
              title: 'Backend Token Exchange',
              description:
                'Frontend callback handler sends code (+ code_verifier) to backend, and backend exchanges it with client_secret at B2C token endpoint.',
            },
            {
              number: 7,
              title: 'User Authenticated',
              description:
                'Frontend stores session state and user returns to dashboard. Tokens remain managed on backend.',
            },
          ]}
        />
      </DocSection>

      {/* ───────────── CREATE B2C TENANT ───────────── */}
      <DocSection
        id="int-tenant"
        title="Create Azure AD B2C Tenant"
        badge="Internal Only"
      >
        <StepCard
          steps={[
            {
              number: 1,
              title: 'Go to Azure Portal',
              description: 'Navigate to portal.azure.com and sign in with your Azure account.',
            },
            {
              number: 2,
              title: 'Search for Azure AD B2C',
              description: "In the top search bar, type 'Azure AD B2C' and select it.",
            },
            {
              number: 3,
              title: 'Create New Tenant',
              description: "Click 'Create a new Azure AD B2C Tenant'. Fill in:",
              note: 'Organization name: INextLabs B2C Test\nInitial domain: inextlabsb2ctest\nCountry: Your region',
            },
            {
              number: 4,
              title: 'Switch Directory',
              description:
                'After creation, click your profile icon → Switch Directory → select your new B2C tenant. URL should contain Microsoft_AAD_B2CAdmin.',
            },
            {
              number: 5,
              title: 'Access B2C Dashboard',
              description:
                "Search 'Azure AD B2C' again after switching directory. You should now see your B2C tenant dashboard.",
            },
          ]}
        />

        <Callout type="warning" title="Directory Check">
          Always verify you are in the B2C tenant directory before making any
          changes. The breadcrumb should show 'Azure AD B2C' not 'Microsoft Entra ID'.
        </Callout>
      </DocSection>

      {/* ───────────── APP REGISTRATION ───────────── */}
      <DocSection
        id="int-app-reg"
        title="App Registration"
        subtitle="Register the main application in Azure AD B2C"
      >
        <p className="text-gray-700 text-sm mb-4">
          Navigate to Azure AD B2C → App registrations → New registration.
          This registers our application as a confidential client.
        </p>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Basic Registration',
              description: 'Fill in registration form:',
              note: 'Name: MyApp Frontend (or client app name)\nSupported account types: Accounts in any identity provider or organizational directory\nRedirect URI: Web platform → http://localhost:5173/callback',
            },
            {
              number: 2,
              title: 'Set Platform to Web',
              description:
                "Under Redirect URI, select 'Web' from the platform dropdown. Enter the client's frontend callback URL.",
            },
            {
              number: 3,
              title: 'Grant Admin Consent',
              description: "Check 'Grant admin consent to openid and offline_access permissions'.",
            },
            {
              number: 4,
              title: 'Register and Note Client ID',
              description:
                'Click Register. Copy the Application (client) ID — this will be given to the client.',
            },
            {
              number: 5,
              title: 'Create Client Secret',
              description:
                'Go to Certificates & Secrets → New client secret. Set expiry → click Add. COPY THE VALUE IMMEDIATELY — shown only once.',
            },
            {
              number: 6,
              title: 'Disable Public Client Flows',
              description:
                "Go to Authentication → Settings tab. Ensure 'Allow public client flows' toggle is DISABLED.",
            },
          ]}
        />

        <Callout type="error" title="Platform Type Critical">
          Platform MUST be 'Web' not 'SPA'.
          SPA platform enforces PKCE which causes:{' '}
          <code className="text-red-700 bg-red-100 px-1 rounded text-xs">
            AADB2C90084: Public clients should not send a client_secret
          </code>
        </Callout>

        <Callout type="warning" title="Redirect URI">
          The redirect_uri must be the CLIENT'S FRONTEND callback URL
          (e.g. http://localhost:5173/callback) and must exactly match the value configured in B2C.
        </Callout>
      </DocSection>

      {/* ───────────── EXPOSE API & SCOPES ───────────── */}
      <DocSection
        id="int-expose-api"
        title="Expose API & Access Token Scopes"
        subtitle="Define custom scopes on the B2C App Registration so clients receive scoped access tokens"
        badge="Internal Only"
      >
        <p className="text-gray-700 text-sm mb-4">
          After registering the application in Azure AD B2C, you must expose an API and
          define custom OAuth 2.0 scopes. These scopes are included in the access token
          request and allow downstream APIs (e.g. the client backend) to verify the
          token was issued for a specific purpose.
        </p>

        <Callout type="info" title="Why This Step Matters">
          Without exposing an API and adding scopes, the access token returned by B2C
          will contain only the default <code className="text-blue-700 bg-blue-50 px-1 rounded text-xs">openid profile email</code> claims.
          Custom scopes let you gate access to specific API resources.
        </Callout>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
          Step 1 — Set the Application ID URI
        </h3>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Open App Registration',
              description:
                'Azure AD B2C → App registrations → select the registered app (e.g. MyApp Frontend).',
            },
            {
              number: 2,
              title: 'Click "Expose an API"',
              description:
                'In the left sidebar under Manage, click "Expose an API".',
            },
            {
              number: 3,
              title: 'Set Application ID URI',
              description:
                'Click "Set" next to Application ID URI. Accept the default value (api://{client-id}) or use a custom URI, then click Save.',
              note: 'Default: api://{client-id}\nCustom: https://{tenant}.onmicrosoft.com/{app-name}',
            },
          ]}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          Step 2 — Add a Scope
        </h3>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Click "Add a scope"',
              description: 'On the Expose an API page, click the "Add a scope" button.',
            },
            {
              number: 2,
              title: 'Fill in Scope Details',
              description: 'Enter the following values in the Add a scope panel:',
              note: 'Scope name: access_as_user\nWho can consent: Admins and users\nAdmin consent display name: Access the API as a user\nAdmin consent description: Allows the app to access the backend API on behalf of the signed-in user.\nState: Enabled',
            },
            {
              number: 3,
              title: 'Click "Add scope"',
              description:
                'The full scope URI will be generated automatically, e.g. api://{client-id}/access_as_user. Note this value — it is required in the authorize URL.',
            },
          ]}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          Scope URI Format
        </h3>

        <InfoTable
          headers={['Field', 'Example Value', 'Notes']}
          rows={[
            ['Application ID URI', 'api://a1b2c3d4-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 'Auto-generated from Client ID'],
            ['Scope name', 'access_as_user', 'Define per resource/permission needed'],
            ['Full scope URI', 'api://{client-id}/access_as_user', 'Use this in authorize URL scope parameter'],
            ['Consent type', 'Admins and users', 'Recommended for internal B2B/B2C flows'],
          ]}
          striped
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          Step 3 — Use the Scope in the Authorize URL
        </h3>

        <p className="text-gray-700 text-sm mb-3">
          Add the full scope URI to the <code className="text-blue-700 bg-blue-50 px-1 rounded text-xs">scope</code> parameter
          of the B2C authorize URL. The access token returned will contain this scope claim.
        </p>

        <CodeBlock
          language="text"
          filename="Authorize URL — with custom scope"
          code={`https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/oauth2/v2.0/authorize
  ?p=B2C_1A_SIGNUP_SIGNIN
  &client_id={client-id}
  &response_type=code
  &response_mode=query
  &redirect_uri=https://app.client.com/callback
  &scope=openid profile email api://{client-id}/access_as_user`}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          Step 4 — Token Exchange with Scope
        </h3>

        <p className="text-gray-700 text-sm mb-3">
          Include the same scope value in the token exchange request body so B2C
          returns an access token scoped to your API.
        </p>

        <CodeBlock
          language="python"
          filename="backend/token_exchange.py"
          showLineNumbers
          code={`import httpx

async def exchange_code_for_tokens(code: str) -> dict:
    token_url = (
        "https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com"
        "/oauth2/v2.0/token?p=B2C_1A_SIGNUP_SIGNIN"
    )
    payload = {
        "grant_type": "authorization_code",
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "code": code,
        "redirect_uri": REDIRECT_URI,
        # Include the custom scope to receive a scoped access token
        "scope": "openid profile email api://{client-id}/access_as_user",
    }
    async with httpx.AsyncClient() as client:
        response = await client.post(token_url, data=payload)
        response.raise_for_status()
        return response.json()   # contains id_token + access_token`}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          Verifying Scope in the Access Token
        </h3>

        <p className="text-gray-700 text-sm mb-3">
          Decode the returned <code className="text-blue-700 bg-blue-50 px-1 rounded text-xs">access_token</code> (JWT) to
          confirm the <code className="text-blue-700 bg-blue-50 px-1 rounded text-xs">scp</code> claim contains your scope.
        </p>

        <CodeBlock
          language="json"
          filename="Decoded access_token payload"
          showLineNumbers
          code={`{
  "iss": "https://{tenant}.b2clogin.com/{tenant-id}/v2.0/",
  "sub": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "aud": "{client-id}",
  "scp": "access_as_user",
  "name": "John Doe",
  "email": "john@example.com",
  "idp": "auth0-clienta",
  "exp": 1800000000,
  "iat": 1700000000
}`}
        />

        <Callout type="warning" title="Scope Must Match App Registration">
          The scope URI in the authorize URL and token request must exactly match
          the full scope URI shown on the "Expose an API" page in Azure AD B2C.
          A mismatch results in an <code className="text-red-700 bg-red-100 px-1 rounded text-xs">invalid_scope</code> error.
        </Callout>

        <Callout type="tip" title="Multiple Scopes">
          You can define multiple scopes (e.g. <code className="text-emerald-700 bg-emerald-50 px-1 rounded text-xs">read</code>,{' '}
          <code className="text-emerald-700 bg-emerald-50 px-1 rounded text-xs">write</code>,{' '}
          <code className="text-emerald-700 bg-emerald-50 px-1 rounded text-xs">admin</code>) on the same App Registration.
          List them space-separated in the scope parameter to request multiple at once.
        </Callout>
      </DocSection>

      {/* ───────────── API PERMISSIONS ───────────── */}
      <DocSection
        id="int-api-permissions"
        title="API Permissions"
        subtitle="Grant the B2C app registration permission to call your exposed API scopes"
        badge="Internal Only"
      >
        <p className="text-gray-700 text-sm mb-4">
          After exposing an API and defining scopes, you must also grant the app registration
          explicit permission to use those scopes. This is done through the{' '}
          <strong>API permissions</strong> blade of the same app registration. Without this step,
          token requests that include your custom scope will be rejected.
        </p>

        <Callout type="info" title="Two-Part Setup">
          Exposing an API (Step 2) defines the scope. Granting API permissions (this step)
          tells Azure AD B2C that this specific client application is allowed to request that scope.
          Both steps are required.
        </Callout>

        <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">
          Step 1 — Open API Permissions
        </h3>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Go to App Registration',
              description:
                'Azure AD B2C → App registrations → select the same app (e.g. InsightsAI Frontend).',
            },
            {
              number: 2,
              title: 'Click "API permissions"',
              description:
                'In the left sidebar under Manage, click "API permissions". You will see Microsoft Graph permissions already listed by default.',
            },
            {
              number: 3,
              title: 'Click "Add a permission"',
              description:
                'Click the "+ Add a permission" button to open the Request API permissions panel.',
            },
          ]}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          Step 2 — Select Your Exposed API
        </h3>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Switch to "My APIs" tab',
              description:
                'In the Request API permissions panel, click the "My APIs" tab. Your app registration (InsightsAI Frontend) will appear here because it exposes an API.',
            },
            {
              number: 2,
              title: 'Select the API',
              description:
                'Click on the app name (e.g. InsightsAI Frontend). The scopes you defined on the "Expose an API" page will be listed.',
            },
            {
              number: 3,
              title: 'Check the scope checkbox',
              description:
                'Tick the checkbox next to your scope (e.g. access_as_user) to select it.',
              note: 'Scope: access_as_user\nFull URI: https://inextlabsb2ctest.onmicrosoft.com/insightsAI_API/access_as_user',
            },
            {
              number: 4,
              title: 'Click "Add permissions"',
              description:
                'Click the "Add permissions" button. The scope now appears in the API permissions list with status "Not granted for {tenant}".',
            },
          ]}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          Step 3 — Grant Admin Consent
        </h3>

        <p className="text-gray-700 text-sm mb-4">
          After adding the permission, it shows as <strong>Not granted</strong>. You must grant
          admin consent so the permission becomes active for all users without requiring individual
          user consent prompts.
        </p>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Click "Grant admin consent for {tenant}"',
              description:
                'At the top of the API permissions list, click the "Grant admin consent for inextlabsb2ctest" button.',
            },
            {
              number: 2,
              title: 'Confirm the dialog',
              description:
                'A confirmation dialog appears — click Yes. The status column will change from a red cross to a green tick.',
            },
            {
              number: 3,
              title: 'Verify status is "Granted"',
              description:
                'The permission row should now show a green checkmark and the text "Granted for inextlabsb2ctest".',
            },
          ]}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          API Permissions Summary
        </h3>

        <InfoTable
          headers={['Permission', 'Type', 'Scope URI', 'Status']}
          rows={[
            ['openid', 'Delegated (Microsoft Graph)', 'openid', '✅ Granted'],
            ['offline_access', 'Delegated (Microsoft Graph)', 'offline_access', '✅ Granted'],
            ['access_as_user', 'Delegated (My APIs)', 'https://inextlabsb2ctest.onmicrosoft.com/insightsAI_API/access_as_user', '✅ Granted'],
          ]}
          striped
        />

        {/* Flow diagram: Add permission → Select scope → Grant consent → Token includes scp */}
        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Permission Flow</h3>
        <div className="overflow-x-auto my-2">
          <div className="flex items-center gap-2 min-w-max py-3">
            <div className="px-4 py-3 bg-blue-100 border-2 border-blue-400 rounded-lg text-center">
              <p className="text-xs font-semibold text-blue-700">App Registration</p>
              <p className="text-xs text-blue-500 mt-1">InsightsAI Frontend</p>
            </div>
            <span className="text-gray-400 text-lg">→</span>
            <div className="px-4 py-3 bg-violet-100 border-2 border-violet-400 rounded-lg text-center">
              <p className="text-xs font-semibold text-violet-700">Add a permission</p>
              <p className="text-xs text-violet-500 mt-1">My APIs → access_as_user</p>
            </div>
            <span className="text-gray-400 text-lg">→</span>
            <div className="px-4 py-3 bg-amber-100 border-2 border-amber-400 rounded-lg text-center">
              <p className="text-xs font-semibold text-amber-700">Grant Admin Consent</p>
              <p className="text-xs text-amber-500 mt-1">Status → Granted ✅</p>
            </div>
            <span className="text-gray-400 text-lg">→</span>
            <div className="px-4 py-3 bg-emerald-100 border-2 border-emerald-400 rounded-lg text-center">
              <p className="text-xs font-semibold text-emerald-700">Token Request</p>
              <p className="text-xs text-emerald-500 mt-1">scope=...access_as_user</p>
            </div>
            <span className="text-gray-400 text-lg">→</span>
            <div className="px-4 py-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-center">
              <p className="text-xs font-semibold text-white">Access Token</p>
              <p className="text-xs text-gray-300 mt-1">&quot;scp&quot;: &quot;access_as_user&quot;</p>
            </div>
          </div>
        </div>

        <Callout type="error" title="Common Mistake — Permission Added But Not Granted">
          Adding the permission without clicking <strong>Grant admin consent</strong> leaves it
          in a <em>Not granted</em> state. Token requests will return an{' '}
          <code className="text-red-700 bg-red-100 px-1 rounded text-xs">access_denied</code> or{' '}
          <code className="text-red-700 bg-red-100 px-1 rounded text-xs">insufficient_scope</code>{' '}
          error even though the scope exists on the API.
        </Callout>

        <Callout type="warning" title="My APIs Tab — App Must Expose an API First">
          The app will only appear under <strong>My APIs</strong> if you have already completed
          the "Expose an API" step and set an Application ID URI. If you don't see it,
          go back and complete that step first.
        </Callout>
      </DocSection>

      {/* ───────────── PLATFORM TYPES ───────────── */}
      <DocSection
        id="int-platform"
        title="Platform Types Explained"
        subtitle="Why Web platform is required for our flow"
      >
        <p className="text-gray-700 text-sm mb-4">
          Azure AD B2C supports different platform types. Each has implications for
          how authentication works. Our federation with Auth0 requires a confidential
          client flow — meaning the backend uses a client_secret to exchange the
          authorization code for tokens. This is only possible with the Web platform.
        </p>

        <InfoTable
          headers={['Platform', 'PKCE', 'client_secret', 'Redirect goes to', 'Our choice']}
          rows={[
            ['Web', 'Optional', '✅ Required', 'Backend server', '✅ YES'],
            ['SPA', '✅ Mandatory', '❌ Blocked', 'Browser/Frontend', '❌ NO'],
            ['Mobile/Desktop', '✅ Mandatory', '❌ Blocked', 'App deep link', '❌ NO'],
          ]}
          striped
        />

        <Callout type="info" title="Key Rule">
          PKCE and client_secret CANNOT be used together in B2C.
          If code_challenge is sent in authorize URL → B2C treats it as public grant → blocks client_secret.
          If no code_challenge → B2C treats it as confidential grant → requires client_secret.
        </Callout>
      </DocSection>

      {/* ───────────── POLICY KEYS ───────────── */}
      <DocSection
        id="int-policy-keys"
        title="Policy Keys (IEF)"
        subtitle="Cryptographic keys required for custom policies"
      >
        <p className="text-gray-700 text-sm mb-6">
          Navigate to Azure AD B2C → Identity Experience Framework → Policy Keys
        </p>

        {/* Key 1 */}
        <div className="mb-6">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg text-sm font-semibold">
            B2C_1A_TokenSigningKeyContainer
          </div>
          <InfoTable
            headers={['Field', 'Value']}
            rows={[
              ['Options', 'Generate'],
              ['Name', 'TokenSigningKeyContainer'],
              ['Key type', 'RSA'],
              ['Key usage', 'Signature'],
            ]}
          />
        </div>

        {/* Key 2 */}
        <div className="mb-6">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg text-sm font-semibold">
            B2C_1A_TokenEncryptionKeyContainer
          </div>
          <InfoTable
            headers={['Field', 'Value']}
            rows={[
              ['Options', 'Generate'],
              ['Name', 'TokenEncryptionKeyContainer'],
              ['Key type', 'RSA'],
              ['Key usage', 'Encryption'],
            ]}
          />
        </div>

        {/* Key 3 */}
        <div className="mb-6">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-t-lg text-sm font-semibold">
            B2C_1A_Auth0ClientASecret
          </div>
          <InfoTable
            headers={['Field', 'Value']}
            rows={[
              ['Options', 'Manual'],
              ['Name', 'Auth0ClientASecret'],
              ['Secret', 'Paste Auth0 client secret here'],
              ['Key usage', 'Signature'],
            ]}
          />
        </div>

        <Callout type="warning" title="Secret Rotation">
          B2C_1A_Auth0ClientASecret must be deleted and recreated
          every time the Auth0 application client secret is rotated.
          Failing to update this will break ALL logins immediately.
        </Callout>
      </DocSection>

      {/* ───────────── CUSTOM POLICIES ───────────── */}
      <DocSection
        id="int-custom-policies"
        title="Custom Policies (IEF)"
        subtitle="Policy file hierarchy and configuration"
      >
        {/* Policy hierarchy tree */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-4 font-mono text-sm">
          <div className="text-gray-700">
            <div>📄 TrustFrameworkBase.xml <span className="text-red-500 ml-2">← Microsoft provided, DO NOT EDIT</span></div>
            <div className="ml-6">└── 📄 TrustFrameworkLocalization.xml <span className="text-red-500 ml-2">← Microsoft provided, DO NOT EDIT</span></div>
            <div className="ml-12">└── 📄 TrustFrameworkExtensions.xml <span className="text-blue-600 ml-2">← Our customizations here</span></div>
            <div className="ml-18">└── 📄 B2C_1A_signup_signin.xml <span className="text-blue-600 ml-2">← Relying party config</span></div>
          </div>
        </div>

        <Callout type="info" title="Starter Pack">
          Never edit TrustFrameworkBase.xml or TrustFrameworkLocalization.xml.
          Download the starter pack from:{' '}
          <span className="font-mono text-xs">
            https://github.com/Azure-Samples/active-directory-b2c-custom-policy-starterpack
          </span>
        </Callout>

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          TrustFrameworkExtensions.xml — Auth0 Provider
        </h3>

        <CodeBlock
          language="xml"
          filename="TrustFrameworkExtensions.xml"
          repoUrl="https://github.com/dev-praveen010/Auth0_B2C_IDP_Fedaration/blob/main/custompolicy%20files/TrustFrameworkExtensions.xml"
          showLineNumbers
          code={`<ClaimsProvider>
  <Domain>auth0-clienta</Domain>
  <DisplayName>Auth0 ClientA</DisplayName>
  <TechnicalProfiles>
    <TechnicalProfile Id="Auth0-ClientA-OIDC">
      <DisplayName>Auth0 ClientA Login</DisplayName>
      <Protocol Name="OpenIdConnect"/>
      <Metadata>
        <Item Key="METADATA">
          https://{auth0-domain}.us.auth0.com/.well-known/openid-configuration
        </Item>
        <Item Key="client_id">YOUR_AUTH0_CLIENT_ID</Item>
        <Item Key="response_types">code</Item>
        <Item Key="scope">openid profile email</Item>
        <Item Key="response_mode">form_post</Item>
        <Item Key="HttpBinding">POST</Item>
      </Metadata>
      <CryptographicKeys>
        <Key Id="client_secret"
             StorageReferenceId="B2C_1A_Auth0ClientASecret"/>
      </CryptographicKeys>
      <OutputClaims>
        <OutputClaim ClaimTypeReferenceId="issuerUserId"
                     PartnerClaimType="sub"/>
        <OutputClaim ClaimTypeReferenceId="email"
                     PartnerClaimType="email"/>
        <OutputClaim ClaimTypeReferenceId="displayName"
                     PartnerClaimType="name"/>
        <OutputClaim ClaimTypeReferenceId="identityProvider"
                     DefaultValue="auth0-clienta"/>
        <OutputClaim ClaimTypeReferenceId="authenticationSource"
                     DefaultValue="socialIdpAuthentication"/>
      </OutputClaims>
      <OutputClaimsTransformations>
        <OutputClaimsTransformation
          ReferenceId="CreateAlternativeSecurityId"/>
        <OutputClaimsTransformation
          ReferenceId="CreateSubjectClaimFromAlternativeSecurityId"/>
      </OutputClaimsTransformations>
      <UseTechnicalProfileForSessionManagement
        ReferenceId="SM-SocialLogin"/>
    </TechnicalProfile>
  </TechnicalProfiles>
</ClaimsProvider>`}
        />

        <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">
          B2C_1A_signup_signin.xml — Relying Party
        </h3>

        <CodeBlock
          language="xml"
          filename="B2C_1A_signup_signin.xml"
          repoUrl="https://github.com/dev-praveen010/Auth0_B2C_IDP_Fedaration/blob/main/custompolicy%20files/SignUpOrSignin.xml"
          showLineNumbers
          code={`<TrustFrameworkPolicy
  PolicyId="B2C_1A_signup_signin"
  PublicPolicyUri="http://{tenant}.onmicrosoft.com/B2C_1A_signup_signin">
  <BasePolicy>
    <TenantId>{tenant}.onmicrosoft.com</TenantId>
    <PolicyId>B2C_1A_TrustFrameworkExtensions</PolicyId>
  </BasePolicy>
  <RelyingParty>
    <DefaultUserJourney ReferenceId="SignUpOrSignInWithAuth0"/>
    <TechnicalProfile Id="PolicyProfile">
      <DisplayName>PolicyProfile</DisplayName>
      <Protocol Name="OpenIdConnect"/>
      <OutputClaims>
        <OutputClaim ClaimTypeReferenceId="displayName"/>
        <OutputClaim ClaimTypeReferenceId="email"/>
        <OutputClaim ClaimTypeReferenceId="objectId"
                     PartnerClaimType="sub"/>
        <OutputClaim ClaimTypeReferenceId="identityProvider"/>
        <OutputClaim ClaimTypeReferenceId="tenantId"
                     AlwaysUseDefaultValue="true"
                     DefaultValue="{Policy:TenantObjectId}"/>
      </OutputClaims>
      <SubjectNamingInfo ClaimType="sub"/>
    </TechnicalProfile>
  </RelyingParty>
</TrustFrameworkPolicy>`}
        />
      </DocSection>

      {/* ───────────── UPLOAD POLICIES ───────────── */}
      <DocSection
        id="int-upload"
        title="Upload Custom Policies"
      >
        <Callout type="error" title="Upload Order is CRITICAL">
          Each policy inherits from its parent.
          Wrong order will cause validation errors.
        </Callout>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Go to Identity Experience Framework',
              description: 'Azure AD B2C → Identity Experience Framework → Custom Policies',
            },
            {
              number: 2,
              title: 'Upload in This Exact Order',
              description: "Click 'Upload custom policy' for each file:",
              note: '1. TrustFrameworkBase.xml\n2. TrustFrameworkLocalization.xml\n3. TrustFrameworkExtensions.xml\n4. B2C_1A_signup_signin.xml',
            },
            {
              number: 3,
              title: 'Verify Each Upload',
              description:
                'After each upload, confirm no error messages appear. A success message shows the policy was validated and saved.',
            },
            {
              number: 4,
              title: 'Test the Policy',
              description:
                "Click on B2C_1A_SIGNUP_SIGNIN in the list → click 'Run now' to test the login flow.",
            },
          ]}
        />
      </DocSection>

      {/* ───────────── CREATE AUTH0 APP ───────────── */}
      <DocSection
        id="int-auth0-app"
        title="Create Auth0 Application"
      >
        <Callout type="error" title="CRITICAL: Application Type">
          Must be 'Regular Web Application' — NOT Single Page Application.
          Auth0 SPA type does NOT support client_secret flows.
          B2C calls Auth0 as a backend service — it needs client_secret.
          Using SPA type causes 404 errors on Auth0's /oauth/token endpoint.
        </Callout>

        <StepCard
          steps={[
            {
              number: 1,
              title: 'Go to Auth0 Dashboard',
              description: 'Navigate to manage.auth0.com → Applications → Applications',
            },
            {
              number: 2,
              title: 'Create Application',
              description: "Click 'Create Application'. Enter name: B2C-Integration-App",
            },
            {
              number: 3,
              title: 'Select Regular Web Application',
              description:
                "Select 'Regular Web Application' from the four options. Click Create.",
            },
            {
              number: 4,
              title: 'Note Client ID and Secret',
              description:
                'In Settings tab, copy:\n- Client ID (give to INextLabs for policy config)\n- Client Secret (give to INextLabs for B2C policy key)',
            },
          ]}
        />
      </DocSection>

      {/* ───────────── CONFIGURE AUTH0 CALLBACKS ───────────── */}
      <DocSection
        id="int-auth0-config"
        title="Configure Auth0 Callbacks"
      >
        <StepCard
          steps={[
            {
              number: 1,
              title: 'Add Allowed Callback URLs',
              description: 'In Auth0 app Settings → Allowed Callback URLs, add:',
              code: {
                content: `https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/oauth2/authresp,
https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/b2c_1a_trustframeworkextensions/oauth2/authresp,
https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/b2c_1a_signup_signin/oauth2/authresp`,
                language: 'text',
                filename: 'Allowed Callback URLs',
              },
            },
            {
              number: 2,
              title: 'Check Grant Types',
              description: 'Scroll to Advanced Settings → Grant Types. Ensure checked:',
              note: '✅ Authorization Code\n✅ Client Credentials',
            },
            {
              number: 3,
              title: 'Save Changes',
              description: 'Click Save Changes at the bottom of the page.',
            },
          ]}
        />
      </DocSection>

      {/* ───────────── AUTH0 SECRET ───────────── */}
      <DocSection
        id="int-auth0-secret"
        title="Update B2C Policy Key Secret"
      >
        <StepCard
          steps={[
            {
              number: 1,
              title: 'Copy Auth0 Client Secret',
              description: 'In Auth0 → App Settings → reveal and copy Client Secret value.',
            },
            {
              number: 2,
              title: 'Delete Old Policy Key',
              description:
                'Azure AD B2C → Identity Experience Framework → Policy Keys → find B2C_1A_Auth0ClientASecret → Delete.',
            },
            {
              number: 3,
              title: 'Create New Policy Key',
              description: 'Click New → fill in:',
              note: 'Options: Manual\nName: Auth0ClientASecret\nSecret: paste Auth0 client secret\nKey usage: Signature',
            },
            {
              number: 4,
              title: 'Click Create',
              description: 'Verify it appears in the Policy Keys list as B2C_1A_Auth0ClientASecret.',
            },
          ]}
        />

        <Callout type="warning" title="Secret Rotation">
          This step must be repeated every time Auth0 client secret is rotated.
          Set a calendar reminder before the secret expires.
        </Callout>
      </DocSection>

      {/* ───────────── WHAT WE NEED FROM CLIENT ───────────── */}
      <DocSection
        id="int-need-from-client"
        title="What We Need From Client"
        subtitle="Information to collect before B2C setup"
        badge="Client Onboarding"
      >
        <Callout type="info" title="Collect Early">
          Collect this information from the client BEFORE starting B2C setup.
          Without these, we cannot configure the Auth0 IDP connection.
        </Callout>

        <ChecklistCard
          title="Required From Client (Auth0)"
          color="blue"
          items={[
            { label: 'Auth0 Domain', description: 'e.g. dev-xxxx.us.auth0.com', required: true },
            { label: 'Auth0 Client ID', description: 'From Auth0 app settings', required: true },
            { label: 'Auth0 Client Secret', description: 'From Auth0 app settings — Regular Web App only', required: true },
            { label: 'Application Name', description: 'Name to display in B2C registration', required: true },
            { label: 'Callback URL', description: 'Client frontend callback URL that receives the B2C code e.g. https://app.client.com/callback', required: true },
            { label: 'Frontend URL', description: 'Client React app URL e.g. https://app.client.com', required: true },
            { label: 'Required Claims', description: 'Which user attributes they need in the token', required: false },
          ]}
        />

        <Callout type="warning" title="App Type Verification">
          Auth0 app MUST be Regular Web Application type.
          If client has SPA type, ask them to change it before proceeding.
          Verify by checking if Client Secret field is visible in Auth0 settings.
        </Callout>
      </DocSection>

      {/* ───────────── WHAT WE GIVE TO CLIENT ───────────── */}
      <DocSection
        id="int-give-to-client"
        title="What We Give To Client"
        subtitle="Credentials and config to hand over after B2C setup"
        badge="Client Onboarding"
      >
        <ChecklistCard
          title="INextLabs Provides To Client"
          color="green"
          items={[
            { label: 'B2C Tenant Name', description: 'e.g. inextlabsb2ctest.onmicrosoft.com', required: true },
            { label: 'B2C Login Domain', description: 'e.g. inextlabsb2ctest.b2clogin.com', required: true },
            { label: 'Client ID', description: 'Application client ID from B2C App Registration', required: true },
            { label: 'Client Secret', description: 'Secret value from Certificates & Secrets — share securely', required: true },
            { label: 'Policy Name', description: 'e.g. B2C_1A_SIGNUP_SIGNIN', required: true },
            { label: 'Authorize URL', description: 'Full authorize endpoint URL', required: true },
            { label: 'Token URL', description: 'Full token endpoint URL', required: true },
            { label: 'Redirect URI', description: 'Exact redirect URI registered in B2C — must match exactly', required: true },
            { label: 'Integration Docs Link', description: 'Link to client-facing documentation (Part 2 of this doc)', required: true },
          ]}
        />

        <Callout type="tip" title="Security">
          Share client_secret via secure channel only (e.g. encrypted email,
          password manager share, or secure file transfer). Never send via Slack or plain email.
        </Callout>
      </DocSection>

      {/* ───────────── ONBOARDING CHECKLIST ───────────── */}
      <DocSection
        id="int-checklist"
        title="Onboarding Checklist"
        subtitle="Complete checklist for each new client"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ChecklistCard
            title="INextLabs Setup Tasks"
            color="blue"
            items={[
              { label: 'Collect client Auth0 credentials', description: 'Domain, Client ID, Client Secret', required: true },
              { label: 'Verify Auth0 app type', description: 'Must be Regular Web Application', required: true },
              { label: 'Create B2C App Registration', description: 'Web platform, backend redirect URI', required: true },
              { label: 'Generate client secret', description: 'Copy value immediately', required: true },
              { label: 'Create policy keys', description: 'Signing, Encryption, Auth0Secret', required: true },
              { label: 'Configure Auth0 callback URLs', description: 'Add all B2C authresp URLs', required: true },
              { label: 'Upload custom policies', description: 'In correct order', required: true },
              { label: 'Test login flow', description: 'Run policy test from Azure portal', required: true },
              { label: 'Share credentials with client', description: 'Via secure channel', required: true },
              { label: 'Share integration docs', description: 'Client docs link', required: true },
            ]}
          />

          <ChecklistCard
            title="Client Tasks (They Do)"
            color="green"
            items={[
              { label: 'Receive INextLabs credentials', description: 'Client ID, secret, URLs', required: true },
              { label: 'Set up backend /callback route', description: 'Python or Node.js', required: true },
              { label: 'Configure environment variables', description: '.env file with B2C config', required: true },
              { label: 'Implement login button in React', description: 'Direct B2C URL — no SDK', required: true },
              { label: 'Test login end-to-end', description: 'Verify token received', required: true },
              { label: 'Decode and verify token', description: 'Check claims in id_token', required: true },
            ]}
          />
        </div>
      </DocSection>

      {/* ───────────── INTERNAL ERRORS ───────────── */}
      <DocSection
        id="int-errors"
        title="Internal Errors & Fixes"
        subtitle="Errors encountered during B2C setup"
      >
        {/* Error 1 */}
        <div className="border-l-4 border-red-500 bg-white rounded-r-lg p-5 mb-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded">AADB2C99059</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">
            "The supplied request must present a code_challenge"
          </p>
          <p className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Cause:</span> B2C custom policy enforces PKCE at the policy level
          </p>
          <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
            <span className="font-semibold">Fix:</span> Use backend URL as redirect_uri. Remove code_challenge from auth URL entirely. This forces confidential client flow.
          </p>
        </div>

        {/* Error 2 */}
        <div className="border-l-4 border-red-500 bg-white rounded-r-lg p-5 mb-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded">AADB2C90084</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">
            "Public clients should not send a client_secret"
          </p>
          <p className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Cause:</span> code_challenge (PKCE) was included in the authorize URL AND client_secret in token exchange. These cannot be combined.
          </p>
          <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
            <span className="font-semibold">Fix:</span> Choose one: either PKCE-only (no client_secret) OR client_secret (no PKCE). For our flow: no code_challenge + use client_secret.
          </p>
        </div>

        {/* Error 3 */}
        <div className="border-l-4 border-red-500 bg-white rounded-r-lg p-5 mb-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded">Auth0 404 on /oauth/token</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">
            "POST .../signup_signin/clien... 404 Not Found"
          </p>
          <p className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Cause:</span> Auth0 application type is SPA. SPA apps don't expose client_secret token endpoint.
          </p>
          <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
            <span className="font-semibold">Fix:</span> Change Auth0 app type to Regular Web Application. Update B2C_1A_Auth0ClientASecret with new client secret.
          </p>
        </div>

        {/* Error 4 */}
        <div className="border-l-4 border-red-500 bg-white rounded-r-lg p-5 mb-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded">AADB2C server_error</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">
            "AADB2C: An exception has occurred"
          </p>
          <p className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Cause:</span> New client_id used in authorize URL is not trusted by the custom policy
          </p>
          <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
            <span className="font-semibold">Fix:</span> Use only the original client_id registered when the policy was set up. New app registrations won't work without policy changes.
          </p>
        </div>

        {/* Error 5 */}
        <div className="border-l-4 border-red-500 bg-white rounded-r-lg p-5 mb-4 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono bg-red-100 text-red-700 px-2 py-0.5 rounded">Redirect loop</span>
          </div>
          <p className="text-sm font-semibold text-gray-900 mb-1">
            "Redirects to auth0.com/login/callback instead of localhost"
          </p>
          <p className="text-xs text-gray-500 mb-2">
            <span className="font-semibold">Cause:</span> Using Auth0 SDK or MSAL SDK instead of direct B2C URL
          </p>
          <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded">
            <span className="font-semibold">Fix:</span> Remove all SDK usage. Build authorize URL manually and redirect directly to B2C.
          </p>
        </div>
      </DocSection>

      {/* ───────────── CONFIG REFERENCE ───────────── */}
      <DocSection
        id="int-config-ref"
        title="Configuration Reference"
        subtitle="All URLs and settings in one place"
      >
        <h3 className="text-base font-semibold text-gray-900 mb-3">B2C Endpoints</h3>
        <InfoTable
          headers={['Endpoint', 'URL Pattern']}
          rows={[
            ['Authorize URL', 'https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/oauth2/v2.0/authorize?p={policy}'],
            ['Token URL', 'https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/oauth2/v2.0/token?p={policy}'],
            ['OIDC Metadata', 'https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/v2.0/.well-known/openid-configuration?p={policy}'],
            ['Auth0 Authresp', 'https://{tenant}.b2clogin.com/{tenant}.onmicrosoft.com/oauth2/authresp'],
          ]}
        />

        <h3 className="text-base font-semibold text-gray-900 mt-8 mb-3">Required Parameters</h3>
        <InfoTable
          headers={['Parameter', 'Value', 'Notes']}
          rows={[
            ['response_type', 'code', 'Authorization code flow'],
            ['response_mode', 'query', 'Code in query string'],
            ['scope', 'openid profile email', 'Minimum required scopes'],
            ['grant_type', 'authorization_code', 'For token exchange'],
            ['p', 'B2C_1A_SIGNUP_SIGNIN', 'Policy name'],
          ]}
          striped
        />
      </DocSection>
    </div>
  );
}
