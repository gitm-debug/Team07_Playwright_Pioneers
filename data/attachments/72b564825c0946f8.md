# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features/01_login.feature.spec.js >> Login Page - UI Verification >> Login with <scenario> >> Login with special chars in username
- Location: .features-gen/features/01_login.feature.spec.js:117:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "Invalid username and password please try again"
Received string:    "
  Please login to LMS application Inactive User : Please contact Admin for assistance User *Password *AdminSelect the role *LoginForgot Password··
"
```

# Page snapshot

```yaml
- generic [ref=e9]:
  - paragraph [ref=e10]: Please login to LMS application
  - alert [ref=e11]: "Inactive User : Please contact Admin for assistance"
  - generic [ref=e15]:
    - textbox "User" [ref=e16]: "!@#$%^&*()"
    - generic: User *
  - generic [ref=e20]:
    - textbox "Password" [ref=e21]: lmsAug@2026
    - generic: Password *
  - generic [ref=e25] [cursor=pointer]:
    - combobox "Select the role Admin" [ref=e26]:
      - generic [ref=e27]: Admin
    - generic: Select the role *
  - button "Login" [active] [ref=e32] [cursor=pointer]
  - link "Forgot Password" [ref=e33] [cursor=pointer]:
    - /url: /forgot-password
```

# Test source

```ts
  74  |   const message = await loginFixture.getInstructionMessage();
  75  |   expect(message).toBe('Please login to LMS application');
  76  | });
  77  | 
  78  | Then('Admin should see two text fields', async ({ loginFixture }) => {
  79  |   const count = await loginFixture.getInputFieldCount();
  80  |   expect(count).toBe(2);
  81  | });
  82  | 
  83  | Then('Admin should see one dropdown', async ({ loginFixture }) => {
  84  |   const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  85  |   expect(isDisplayed).toBeTruthy();
  86  | });
  87  | 
  88  | Then('Admin should see User in the first text field', async ({ loginFixture }) => {
  89  |   const placeholder = await loginFixture.getFirstFieldPlaceholder();
  90  |   expect(placeholder).toBe('User');
  91  | });
  92  | 
  93  | Then('Admin should see Password in the second text field', async ({ loginFixture }) => {
  94  |   const placeholder = await loginFixture.getSecondFieldPlaceholder();
  95  |   expect(placeholder).toBe('Password');
  96  | });
  97  | 
  98  | Then('Admin should see asterisk mark next to user field', async ({ loginFixture }) => {
  99  |   const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  100 |   expect(isDisplayed).toBeTruthy();
  101 | });
  102 | 
  103 | Then('Admin should see asterisk mark next to password field', async ({ loginFixture }) => {
  104 |   const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  105 |   expect(isDisplayed).toBeTruthy();
  106 | });
  107 | 
  108 | Then('Admin should see select the role placeholder in dropdown', async ({ loginFixture }) => {
  109 |   const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  110 |   expect(isDisplayed).toBeTruthy();
  111 | });
  112 | 
  113 | Then('Admin should see Admin staff student options in dropdown', async ({ loginFixture }) => {
  114 |   const options = await loginFixture.getRoleDropdownOptions();
  115 |   expect(options).toEqual(expect.arrayContaining(['Admin', 'Staff', 'Student']));
  116 | });
  117 | 
  118 | Then('Admin should see login form on the centre of the page', async ({ loginFixture }) => {
  119 |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  120 |   expect(isDisplayed).toBeTruthy();
  121 | });
  122 | 
  123 | Then('Username Password labels should be left aligned above their respective input fields', async ({ loginFixture }) => {
  124 |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  125 |   expect(isDisplayed).toBeTruthy();
  126 | });
  127 | 
  128 | Then('Admin should see login button', async ({ loginFixture }) => {
  129 |   const isDisplayed = await loginFixture.isLoginButtonDisplayed();
  130 |   expect(isDisplayed).toBeTruthy();
  131 | });
  132 | 
  133 | Then('Admin should see user text in gray color', async ({ loginFixture }) => {
  134 |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  135 |   expect(isDisplayed).toBeTruthy();
  136 | });
  137 | 
  138 | Then('Admin should see password text in gray color', async ({ loginFixture }) => {
  139 |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  140 |   expect(isDisplayed).toBeTruthy();
  141 | });
  142 | 
  143 | When('Admin click login button after entering valid credentials', async ({ loginFixture }) => {
  144 |   await loginFixture.navigate();
  145 |   await loginFixture.enterEmail(process.env.EMAIL);
  146 |   await loginFixture.enterPassword(process.env.PASSWORD);
  147 |   await loginFixture.selectRole(process.env.ROLE);
  148 |   await loginFixture.clickLogin();
  149 |   await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  150 |   await loginFixture.page.waitForLoadState('networkidle');
  151 | });
  152 | 
  153 | Then('admin should land on home page', async ({ page }) => {
  154 |   const isLoginPageGone = !page.url().includes('/login');
  155 |   expect(isLoginPageGone).toBeTruthy();
  156 | });
  157 | 
  158 | When('Admin enters the credentials for {string} and clicks login', async ({ loginFixture }, scenario) => {
  159 |   const entry = getLoginCase(scenario);
  160 |   const { email, password, role } = resolveCredentials(entry);
  161 |   await loginFixture.loginWithCredentials(email, password, role);
  162 | });
  163 | 
  164 | Then('Admin should see the result for {string}', async ({ loginFixture, page }, scenario) => {
  165 |   const entry = getLoginCase(scenario);
  166 |   const expected = entry.expected;
  167 |   if (expected === 'home page') {
  168 |     await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  169 |     const isLoginPageGone = !page.url().includes('/login');
  170 |     expect(isLoginPageGone).toBeTruthy();
  171 |   } else {
  172 |     await loginFixture.page.waitForTimeout(3000);
  173 |     const bodyText = await loginFixture.page.textContent('body');
> 174 |     expect(bodyText).toContain(expected);
      |                      ^ Error: expect(received).toContain(expected) // indexOf
  175 |   }
  176 | });
  177 | 
```