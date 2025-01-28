import { NextRequest, NextResponse } from 'next/server';

const blogPosts = [
  { id: 1,  postTitle: 'Build Your Confidence', postSubTitle: 'Unlock Your Potential, Embrace Your Strength', postDate: '15/1/2025', postImage: '/images/confidence.jpg', 
    postContent: 'Confidence is not a trait you are simply born with; it is a skill that can be developed and nurtured over time. It acts as the backbone of your personal and professional life, empowering you to take risks, embrace challenges, and seize opportunities. Building confidence is a journey, but with the right mindset and strategies, you can unlock your true potential. Let’s explore practical ways to strengthen your self-confidence. Confidence is the belief in your abilities and the trust in your capacity to handle life’s situations. It is not about being perfect or knowing everything but rather about embracing who you are and working with what you have. A confident person is aware of their strengths and acknowledges their weaknesses without allowing them to hold them back. Often, low confidence stems from self-doubt and negative thinking. Pay attention to your inner dialogue. Are you too hard on yourself? Replace self-criticism with self-compassion. Instead of saying, “I can’t do this,” tell yourself, “I am capable of learning and improving.” Reframing your thoughts can significantly boost your confidence over time. Confidence grows through accomplishment. Start by setting small, realistic goals and celebrate your progress along the way. These achievements, no matter how minor they may seem, build a foundation of trust in your abilities. As you achieve more, you’ll naturally begin to feel more capable. The people you spend time with greatly influence your self-perception. Surround yourself with supportive, encouraging individuals who uplift you and believe in your potential. Avoid those who drain your energy or bring negativity into your life.Failure is not the opposite of success; it’s a stepping stone toward it. Every setback is an opportunity to learn and grow. Embrace failures as valuable lessons, and don’t let them deter you from pursuing your goals. Resilience and the ability to bounce back are key components of confidence. Building your confidence is a journey that requires patience, persistence, and self-compassion. Remember, confidence doesn’t mean being fearless; it means embracing your fears and taking action despite them. As you grow in confidence, you’ll discover a world of possibilities waiting for you. So, take the first step today—believe in yourself and watch your potential unfold.'},
  
  { id: 2,  postTitle: 'Get Mental Peace', postSubTitle: 'Find Serenity, Cultivate Inner Harmony', postDate: '10/12/2024', postImage: '/images/mental-wellness.jpg', 
    postContent: 'Mental peace is an essential aspect of a balanced and fulfilling life. In our fast-paced and often stressful world, finding tranquility can feel like a challenge, but it is possible with intentional practices and a shift in perspective. Achieving mental peace starts with cultivating mindfulness and being present in the moment. Instead of worrying about the past or stressing over the future, focusing on the here and now allows your mind to rest and find clarity. Practicing gratitude is another powerful way to achieve mental peace. When you shift your focus from what you lack to what you have, you begin to see the beauty in life’s simple moments. Taking time to appreciate small joys, like a kind word from a friend or a quiet moment with a cup of tea, can make a significant difference in your state of mind. Letting go of perfectionism is also key. Often, the pursuit of being perfect creates unnecessary pressure and anxiety. Accepting that it’s okay to make mistakes and learn from them allows you to approach life with greater ease. Self-compassion plays a big role in this process. Treat yourself with kindness and remember that you are human, just like everyone else. Spending time in nature can be incredibly soothing for the mind. A walk in the park, sitting by a river, or simply listening to birdsong can help you reconnect with the world around you and find inner calm. Nature has a unique way of reminding us that we are part of something greater, which can be both humbling and comforting. Lastly, prioritize activities that bring you joy and relaxation. Whether it’s reading, painting, meditating, or spending time with loved ones, these moments of joy act as anchors, keeping you grounded amid life’s chaos. With consistent effort and care, mental peace becomes not just a fleeting experience but a lasting part of your life.'},
  
  { id: 3,  postTitle: 'Achieve Your Goals', postSubTitle: 'Turn Ambitions into Reality with Focus and Drive', postDate: '23/11/2024', postImage: '/images/goals.jpg', 
    postContent: 'Achieving your goals starts with having a clear vision of what you want to accomplish. When you define your objectives, you create a roadmap that guides your actions and decisions. Break your goals into smaller, manageable steps to make the process less overwhelming and more achievable. Each small step you take brings you closer to the bigger picture. Consistency and dedication play a crucial role in reaching your goals. It’s important to show up every day, even when progress feels slow or challenges arise. Celebrate small wins along the way, as they keep you motivated and remind you of how far you’ve come. Staying focused and avoiding distractions are also key to maintaining momentum. Surrounding yourself with supportive and like-minded people can make a significant difference. Encouragement from others can boost your confidence and provide valuable insights. Learning from failures and viewing them as opportunities to grow helps build resilience and keeps you moving forward. Ultimately, patience and persistence are essential. Achieving your goals may take time, but with a positive attitude and a commitment to your vision, you can overcome obstacles and turn your dreams into reality.'},

  { id: 4,  postTitle: 'Stay Motivated', postSubTitle: 'Fuel Your Passion, Keep Moving Forward', postDate: '7/10/2024', postImage: '/images/motivation.jpg', 
    postContent: 'Staying motivated is essential for pursuing your dreams and overcoming challenges. Motivation comes from within, and it starts by understanding why your goals matter to you. When you connect your actions to a deeper purpose, it becomes easier to stay focused and driven. Surrounding yourself with positivity, whether it’s through supportive people, inspiring books, or uplifting music, helps keep your energy high and your mindset strong. It’s important to break tasks into smaller, manageable steps to avoid feeling overwhelmed. Each small accomplishment builds momentum and boosts your confidence. Celebrating these wins, no matter how small, reinforces your progress and keeps you encouraged. When setbacks occur, remind yourself that they are temporary and a natural part of the journey. Learning from challenges strengthens your resilience and prepares you for future success. Taking care of yourself physically and mentally is crucial for maintaining motivation. Regular exercise, a balanced diet, and sufficient rest keep your energy levels stable. Practicing mindfulness or meditation can help clear your mind and refocus your efforts. Above all, be kind to yourself and recognize that motivation can ebb and flow. By staying patient and persistent, you can reignite your drive and continue moving forward toward your aspirations.'},

  { id: 5,  postTitle: 'Self Development', postSubTitle: 'Empower Growth, Unlock Your Best Self', postDate: '26/6/2024', postImage: '/images/development.jpg', 
    postContent: 'Self-development is a lifelong journey of growth and improvement. It begins with self-awareness, understanding your strengths and identifying areas where you can improve. Taking small, consistent steps toward personal growth makes a significant difference over time. Investing in learning, whether through books, courses, or experiences, expands your knowledge and skills, helping you to become the best version of yourself. Being open to feedback and willing to embrace change are essential for self-development. Growth often requires stepping out of your comfort zone and facing challenges with a positive mindset. Mistakes and setbacks are opportunities to learn and grow stronger. Practicing self-discipline and setting clear goals help you stay focused and motivated on your path to improvement. Surrounding yourself with inspiring and supportive people creates an environment that encourages growth. When you see others striving for their goals, it motivates you to push forward with your own. Taking care of your mental and physical well-being is also crucial, as it provides the foundation for sustained growth and success. By committing to continuous self-improvement, you can unlock your full potential and lead a more fulfilling life.'},
];

//--=== Handle GET Request ===--//
export async function GET() {
  return NextResponse.json(blogPosts);
}

//--=== Handle POST Request ===--//
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { postTitle, postSubTitle, postDate, postImage, postContent } = body;

  if (!postTitle || !postSubTitle || !postDate || !postImage || !postContent) {
    return new NextResponse(
      JSON.stringify({ message: 'Missing required fields' }),
      { status: 400 }
    );
  }

  const Post = {
    id: blogPosts.length + 1,
    postTitle,
    postSubTitle,
    postDate,
    postImage,
    postContent
  };

  blogPosts.push(Post);

  return NextResponse.json(Post, { status: 201 });
}

//--=== Handle other methods ===--//
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 405,
    headers: {
      Allow: 'GET, POST',
    },
  });
}
