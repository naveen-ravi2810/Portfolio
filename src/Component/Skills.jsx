import React from 'react'

function Skills({skillsref}) {
  return (
    <div ref={skillsref} className='pt-20'>
      <h1 id="titl" className='font-extrabold text-3xl md:pl-20 pl-5 underline md:pb-20 pb-10 uppercase'>Skills</h1>
      <div className='w-full md:grid grid-cols-3 gap-10 py-4 px-10'>
        <div id="porgramming_knowledge">
          <h2 className='text-2xl font-semibold md:no-underline underline md:pb-3 pb-4'>Programming Knowledge</h2>
          <div className='md:grid grid-cols-2 pt-2 gap-y-5 md:space-y-0 space-y-5 pb-6'>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png" alt="" /> Python </p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/The_C_Programming_Language_logo.svg/1280px-The_C_Programming_Language_logo.svg.png" alt="" />C</p> 
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1280px-ISO_C%2B%2B_Logo.svg.png" alt="" />C++</p> 
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png" alt="" />Java</p> 
          </div>
        </div>
        <div id="webdevlopment">
          <h2 className='text-2xl font-semibold md:no-underline underline md:pb-3 pb-4'>Web/App Development</h2>
          <div className='md:grid grid-cols-2 pt-2 gap-y-5 md:space-y-0 space-y-5 pb-6'>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1920px-HTML5_logo_and_wordmark.svg.png" alt="" /> HTML </p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="" /> CSS </p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/220px-Unofficial_JavaScript_logo_2.svg.png" alt="" /> JS </p>
          </div>
        </div>
        <div id="mobiledevelopment">
          <h2 className='text-2xl font-semibold md:no-underline underline md:pb-3 pb-4'>Frameworks</h2>
          <div className='md:grid grid-cols-2 pt-2 gap-y-5 md:space-y-0 space-y-5 pb-6'>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://e7.pngegg.com/pngimages/509/951/png-clipart-flask-by-example-web-framework-python-bottle-bottle-text-logo-thumbnail.png" alt="" />Flask</p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" /> React JS/Native </p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" /> Tailwind CSS </p>
          </div>
        </div>
        <div id="database">
          <h2 className='text-2xl font-semibold md:no-underline underline md:pb-3 pb-4'>Database</h2>
          <div className='md:grid grid-cols-2 pt-2 gap-y-5 md:space-y-0 space-y-5 pb-6'>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png" alt="" />MySQL</p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png" alt="" />Dynamo DB</p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" alt="" />Mongo DB</p>
          </div>
        </div>
        <div id="cloudtechnology">
          <h2 className='text-2xl font-semibold md:no-underline underline md:pb-3 pb-4'>Clound Technology</h2>
          <div className='md:grid grid-cols-2 pt-2 gap-y-5 md:space-y-0 space-y-5 pb-6'>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg/1200px-AWS_Simple_Icons_Compute_Amazon_EC2_Instances.svg.png" alt="" />EC2</p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://roi4cio.com/fileadmin/user_upload/aws_rds.png" alt="" />RDS</p>
          </div>
        </div>
        <div id="Tools">
          <h2 className='text-2xl font-semibold md:no-underline underline md:pb-3 pb-4'>Tools</h2>
          <div className='md:grid grid-cols-2 pt-2 gap-y-5 md:space-y-0 space-y-5 pb-6'>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" alt="" />VS code</p>
            <p className='flex items-center gap-3 text-xl font-serif'><img className='w-[8%]' src="https://blog.ippon.fr/content/images/2015/01/postman_rest_client-150x150.png" alt="" />Postman</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills