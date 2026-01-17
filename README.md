# Portfolio Project

A premium, highly customizable portfolio template designed for Senior Software Developers and Consultants. Built with HTML, CSS, and Vanilla JavaScript with a configuration-driven architecture.

## 🚀 Features

- **Configuration Driven**: Easily toggle sections on/off and update content without touching HTML.
- **Premium Design**: Dark mode aesthetic, glassmorphism, and smooth animations.
- **Responsive**: Fully optimized for mobile and desktop.
- **Dynamic Blog**: Simple JSON-based blog system.
- **No Build Step**: Pure static files, ready to deploy.

## 🛠 customization

### 1. Updating Content & Toggling Sections
Open `js/config.js`. This file acts as your Content Management System (CMS).

- **Features**: Change `true` to `false` in `siteConfig.sections` to hide a section.
  ```javascript
  sections: {
      about: true,
      certifications: false, // Hidden
      ...
  }
  ```
- **Profile Details**: Update the `profile` object with your details (Name, Links, Taglines).
- **Data**: Update arrays for `experience`, `education`, `services`, etc.

### 2. Adding Blogs
1. Create a new `.json` file in the `posts/` folder (e.g., `my-new-post.json`).
2. Follow this format:
   ```json
   {
       "title": "My Blog Title",
       "date": "Jan 01, 2024",
       "content": "<p>My HTML content here...</p>"
   }
   ```
3. Register the post in `js/config.js` under `blogs`:
   ```javascript
   blogs: [
       {
           id: 3,
           title: "My Blog Title",
           date: "Jan 01, 2024",
           summary: "Short summary...",
           file: "posts/my-new-post.json"
       },
       ...
   ]
   ```

### 3. Changing Profile Photo
- Place your photo in the `assets/` folder.
- Update the path in `js/config.js`:
  ```javascript
  profile: {
      ...
      avatar: "assets/my-photo.jpg"
  }
  ```

---

## 🌐 Hosting for Free

### Option 1: GitHub Pages (Recommended)
1. Log in to **GitHub** and create a **New Repository** (e.g., `my-portfolio`).
2. Upload all the files from this `portfolio-project` folder to the repository.
   - You can use the command line:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
     git push -u origin main
     ```
3. Go to **Settings** > **Pages**.
4. Under **Source**, select `main` branch and `/ (root)` folder.
5. Click **Save**. GitHub will give you a live URL (e.g., `https://yourusername.github.io/my-portfolio/`).

#### 🔗 Adding a Custom Domain (GitHub Pages)
1. Purchase a domain name (e.g., from Namecheap or GoDaddy).
2. In your GitHub repository, go to **Settings** > **Pages**.
3. In the **Custom domain** field, enter your domain (e.g., `www.yourname.com`) and click **Save**.
4. Log in to your Domain Registrar's dashboard and manage DNS settings:
   - Add a **CNAME record**:
     - **Host**: `www`
     - **Value**: `YOUR_USERNAME.github.io` (replace with your actual GitHub username website URL).
   - *Note: It may take up to 24 hours for DNS changes to propagate.*

### Option 2: AWS S3 (Static Website Hosting)
1. Log in to the **AWS Console**.
2. Go to **S3** and **Create Bucket**.
   - Bucket name must be globally unique (e.g., `my-awesome-portfolio-site`).
   - Uncheck "Block all public access" (You need it public).
   - Acknowledge the warning.
3. Upload all files from `portfolio-project` to the bucket.
4. Go to **Properties** > **Static website hosting** (at the bottom).
5. Click **Edit**, select **Enable**.
6. Set Index document to `index.html`.
7. Save changes.
8. Go to **Permissions** tab > **Bucket policy**.
9. Add this policy (replace `YOUR_BUCKET_NAME`):
   ```json
   {
       "Version": "2012-10-17",
       "Statement": [
           {
               "Sid": "PublicReadGetObject",
               "Effect": "Allow",
               "Principal": "*",
               "Action": "s3:GetObject",
               "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
           }
       ]
   }
   ```
10. Your site URL is found under "Static website hosting" in Properties.

#### 🔗 Adding a Custom Domain (AWS S3)
*Note: To map a custom domain directly to S3, your **Bucket Name** must match your domain name exactly (e.g., `www.yourname.com`).*

1. If you haven't created the bucket yet, ensure the **Bucket Name** is your domain (e.g., `www.yourname.com`).
2. Log in to your Domain Registrar's dashboard.
3. Add a **CNAME record**:
   - **Host**: `www`
   - **Value**: Copy the endpoint URL from the **Static website hosting** section in S3 properties (remove `http://` prefix).
     - Example Value: `www.yourname.com.s3-website-us-east-1.amazonaws.com`

## 📝 License
Free to use and modify.
