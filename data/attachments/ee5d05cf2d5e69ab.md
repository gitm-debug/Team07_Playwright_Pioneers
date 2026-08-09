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
  51  | Then('Admin should see Please login to LMS application message', async ({ loginFixture }) => {
  52  |   const message = await loginFixture.getInstructionMessage();
  53  |   expect(message).toBe('Please login to LMS application');
  54  | });
  55  | 
  56  | Then('Admin should see two text fields', async ({ loginFixture }) => {
  57  |   const count = await loginFixture.getInputFieldCount();
  58  |   expect(count).toBe(2);
  59  | });
  60  | 
  61  | Then('Admin should see one dropdown', async ({ loginFixture }) => {
  62  |   const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  63  |   expect(isDisplayed).toBeTruthy();
  64  | });
  65  | 
  66  | Then('Admin should see User in the first text field', async ({ loginFixture }) => {
  67  |   const placeholder = await loginFixture.getFirstFieldPlaceholder();
  68  |   expect(placeholder).toBe('User');
  69  | });
  70  | 
  71  | Then('Admin should see Password in the second text field', async ({ loginFixture }) => {
  72  |   const placeholder = await loginFixture.getSecondFieldPlaceholder();
  73  |   expect(placeholder).toBe('Password');
  74  | });
  75  | 
  76  | Then('Admin should see asterisk mark next to user field', async ({ loginFixture }) => {
  77  |   const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  78  |   expect(isDisplayed).toBeTruthy();
  79  | });
  80  | 
  81  | Then('Admin should see asterisk mark next to password field', async ({ loginFixture }) => {
  82  |   const isDisplayed = await loginFixture.isUserAsteriskDisplayed();
  83  |   expect(isDisplayed).toBeTruthy();
  84  | });
  85  | 
  86  | Then('Admin should see select the role placeholder in dropdown', async ({ loginFixture }) => {
  87  |   const isDisplayed = await loginFixture.isRoleDropdownDisplayed();
  88  |   expect(isDisplayed).toBeTruthy();
  89  | });
  90  | 
  91  | Then('Admin should see Admin staff student options in dropdown', async ({ loginFixture }) => {
  92  |   const options = await loginFixture.getRoleDropdownOptions();
  93  |   expect(options).toEqual(expect.arrayContaining(['Admin', 'Staff', 'Student']));
  94  | });
  95  | 
  96  | Then('Admin should see login form on the centre of the page', async ({ loginFixture }) => {
  97  |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  98  |   expect(isDisplayed).toBeTruthy();
  99  | });
  100 | 
  101 | Then('Username Password labels should be left aligned above their respective input fields', async ({ loginFixture }) => {
  102 |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  103 |   expect(isDisplayed).toBeTruthy();
  104 | });
  105 | 
  106 | Then('Admin should see login button', async ({ loginFixture }) => {
  107 |   const isDisplayed = await loginFixture.isLoginButtonDisplayed();
  108 |   expect(isDisplayed).toBeTruthy();
  109 | });
  110 | 
  111 | Then('Admin should see user text in gray color', async ({ loginFixture }) => {
  112 |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  113 |   expect(isDisplayed).toBeTruthy();
  114 | });
  115 | 
  116 | Then('Admin should see password text in gray color', async ({ loginFixture }) => {
  117 |   const isDisplayed = await loginFixture.isLoginPageDisplayed();
  118 |   expect(isDisplayed).toBeTruthy();
  119 | });
  120 | 
  121 | When('Admin click login button after entering valid credentials', async ({ loginFixture }) => {
  122 |   await loginFixture.navigate();
  123 |   await loginFixture.enterEmail(process.env.EMAIL);
  124 |   await loginFixture.enterPassword(process.env.PASSWORD);
  125 |   await loginFixture.selectRole(process.env.ROLE);
  126 |   await loginFixture.clickLogin();
  127 |   await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  128 |   await loginFixture.page.waitForLoadState('networkidle');
  129 | });
  130 | 
  131 | Then('admin should land on home page', async ({ page }) => {
  132 |   const isLoginPageGone = !page.url().includes('/login');
  133 |   expect(isLoginPageGone).toBeTruthy();
  134 | });
  135 | 
  136 | When('Admin enters email {string} and password {string} and role {string} and clicks login', async ({ loginFixture }, email, password, role) => {
  137 |   const actualEmail = email === 'valid@email.com' ? process.env.EMAIL : email;
  138 |   const actualPassword = password === 'pass123' ? process.env.PASSWORD : password;
  139 |   const actualRole = role === 'Admin' ? process.env.ROLE : role;
  140 |   await loginFixture.loginWithCredentials(actualEmail, actualPassword, actualRole);
  141 | });
  142 | 
  143 | Then('Admin should see {string}', async ({ loginFixture, page }, expected) => {
  144 |   if (expected === 'home page') {
  145 |     await loginFixture.page.waitForURL(url => !url.toString().includes('/login'), { timeout: 15000 });
  146 |     const isLoginPageGone = !page.url().includes('/login');
  147 |     expect(isLoginPageGone).toBeTruthy();
  148 |   } else {
  149 |     await loginFixture.page.waitForTimeout(3000);
  150 |     const bodyText = await loginFixture.page.textContent('body');
> 151 |     expect(bodyText).toContain(expected);
      |                      ^ Error: expect(received).toContain(expected) // indexOf
  152 |   }
  153 | });
  154 | 
```