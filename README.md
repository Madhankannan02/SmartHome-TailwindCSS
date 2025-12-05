# 🏠 HomeSmart Landing Page

A modern, responsive landing page for a smart home product, built entirely using **Tailwind CSS**. This project served as my initial hands-on experience with the utility-first CSS framework.

<img width="1807" height="849" alt="Image" src="https://github.com/user-attachments/assets/b4a5474a-2aba-4d88-ae21-f9d5cccc428a" /

## ✨ Features

  * **Responsive Design:** The layout adapts seamlessly to different screen sizes (mobile, tablet, and desktop) for an optimal user experience.
  * **Utility-First Styling:** All styling is implemented using Tailwind CSS utility classes, demonstrating a utility-first workflow.
  * **Modern Aesthetic:** A bold, two-tone color scheme (**Yellow** and **Dark Green**) provides a contemporary and engaging look.
  * **Interactive Elements:** Features prominent calls-to-action (CTAs) and an appealing interactive-style product visualization card.
  * **Modular Component Structure:** The design is broken down into distinct sections (Header, Hero, Features, Partners, Contact/Footer).

-----

## 🛠️ Technologies Used

| Tool/Technology | Description |
| :--- | :--- |
| **HTML5** | For the core structure and semantic markup of the page. |
| **Tailwind CSS** | The primary styling framework. Utilized for rapid UI development and responsive design. |
| **CSS (PostCSS)** | Used in the build process to handle Tailwind compilation and optimizations. |
| **JavaScript (Minimal)** | For any minor interactive features or functionality (e.g., potential mobile navigation toggle). |

-----

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

You'll need **Node.js** and **npm** (or yarn) installed to use the Tailwind CLI/build process.

```bash
# Check if Node.js is installed
node -v
# Check if npm is installed
npm -v
```

### Installation and Setup

1.  **Clone the Repository:**

    ```bash
    git clone [YOUR_REPOSITORY_URL]
    cd homesmart-landing-page
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Web Page:**
    Since this project uses Tailwind CSS, you need to compile the utility classes into a final CSS file.

      * **Run in Development Mode (Watch for changes):**

        ```bash
        npm run dev 
        ```

        This command will watch your HTML/JS files for utility classes and rebuild the `style.css` file whenever changes are saved.

4.  **Open the Page:**
    Simply open the `index.html` file in your web browser.

-----

## 💡 Project Highlights & Learnings

This project was a significant learning curve, focusing heavily on adopting the Tailwind methodology. Key takeaways include:

  * **Utility-First Paradigm:** Gaining proficiency in building complex components directly from utility classes (e.g., using `flex`, `grid`, and spacing utilities like `p-4`, `m-auto`).
  * **Responsive Modifiers:** Mastering the use of responsive prefixes like `sm:`, `md:`, and `lg:` to control layout and styling at different breakpoints.
  * **Configuration & Customization:** Understanding how to configure the `tailwind.config.js` file to define custom colors, fonts, and breakpoints.
  * **Component-Based Thinking:** Structuring the HTML/CSS with reusability in mind, even within a utility-first environment.

-----


## 📄 License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.
