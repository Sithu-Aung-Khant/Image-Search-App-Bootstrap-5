# Image Search App rebuilding with Bootstrap

I followed a tutorial on building a JS project | [Image Search App with Pexels API](https://www.youtube.com/watch?v=oaliV2Dp7WQ&t=447s&ab_channel=Tech2etc). However, since I was learning Bootstrap 5, I set myself a challenge to rebuild this website with just Bootstrap. My goal was to replace all the CSS code with Bootstrap classes, and this endeavor provided me with some intriguing insights.

> **[!NOTE]** > **I understand that using Bootstrap classes for all styling isn't practical but I did this challenge just to enhance my understanding of Bootstrap concepts.**

The most significant challenge arose when I attempted to manipulate the DOM with event listeners.

In the plain CSS version, I could simply create an element (like div, a, image, etc.), add a class, and it was ready since I had consolidated all the styling within a single class using an external CSS file. However, when I tried to achieve the same functionality with Bootstrap, I found myself needing to add numerous classes.

Bootstrap primarily uses classes to style HTML elements. I integrated the grid system, managed margins, and display properties directly within these elements. Consequently, when I attempted to manipulate the results of an API call, I had to reapply all the Bootstrap classes within the function. Below are screenshots of both versions for clarity.

<table>
    <tr>
        <td><h3>DOM MANIPULATION WITH CSS</h3><img src="./assets/code.png" alt="CSS" width="500"></td>
        <td><h3>DOM Manipulation With Bootstrap</h3><img src="./assets/code.with.bootstrap.png" alt="Bootstrap5" width="550"></td>
    </tr>
</table>

After completing this challenge, I have a much better understanding of the Bootstrap concept. I feel like I've grasped the constraints; I mean, using a framework is good, but sometimes it's less flexible than using plain CSS.

using frameworks is good for collaboration and code maintaince, developmet. But I can do whatever I want with when I don't using them. I think I have to dive deep in those framworks and learn how to use effecitvely.
