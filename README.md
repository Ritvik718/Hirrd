# Hirrd

**Hirrd** is a modern job portal application designed to connect candidates and recruiters, making job search and recruitment efficient and seamless. Built using the latest web technologies, **Hirrd** provides an intuitive and feature-rich platform for job seekers and employers alike.

---

## **Features**

### **For Candidates**
- **Search and Browse Jobs**: Easily find job listings based on various filters and criteria.
- **Save Jobs**: Save job listings to review and apply later.
- **Profile Management**: Manage and update personal profile details to attract recruiters.

### **For Recruiters**
- **Post Jobs**: Add new job listings to the platform to reach potential candidates.
- **Add Companies**: Create and manage comprehensive company profiles.
- **View Applications**: Monitor and manage job applications efficiently.

---

## **Technologies Used**

### **Frontend**
- **ReactJS**: For building a dynamic and responsive user interface.
- **Tailwind CSS**: For modern styling and ensuring a consistent, responsive design.
- **ShadCN**: For advanced UI components and utility functions.

### **Authentication**
- **ClerkJS**: For secure user authentication and profile management.

### **Backend**
- **Supabase**: For database management, real-time functionality, and API handling.

---

## **Usage**

### For Candidates:
1. Sign up and create a profile.
2. Browse job listings and save jobs you are interested in.
3. Apply for jobs directly through the platform.

### For Recruiters:
1. Create a recruiter account.
2. Add your company profile.
3. Post job openings and manage applications.

---

## **Getting Started**

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hirrd.git
   cd hirrd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```env
     VITE_SUPABASE_URL=<your-supabase-url>
     VITE_SUPABASE_ANON_KEY=<your-supabase-anon-key>
     VITE_CLERK_PUBLISHABLE_KEY=<your-clerk-api-key>
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

   The app will be available at `http://localhost:3000`.

---
