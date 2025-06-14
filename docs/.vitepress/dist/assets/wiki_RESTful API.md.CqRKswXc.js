import{_ as n,c as a,o as e,ag as t}from"./chunks/framework.DPDPlp3K.js";const g=JSON.parse('{"title":"RESTful API","description":"RESTful API（Representational State Transfer API）是一种基于REST架构风格的应用程序接口设计方法，广泛用于Web服务和系统之间的数据交换。REST由Roy Fielding在2000年的博士论文中首次提出，强调无状态性、客户端-服务器分离、统一接口、可缓存性等原则。RESTful API的核心是通过HTTP协议进行资源的创建、读取、更新和删除操作（CRUD）。","frontmatter":{"title":"RESTful API","description":"RESTful API（Representational State Transfer API）是一种基于REST架构风格的应用程序接口设计方法，广泛用于Web服务和系统之间的数据交换。REST由Roy Fielding在2000年的博士论文中首次提出，强调无状态性、客户端-服务器分离、统一接口、可缓存性等原则。RESTful API的核心是通过HTTP协议进行资源的创建、读取、更新和删除操作（CRUD）。","head":[["link",{"rel":"canonical","href":"https://www.clashcn.org/wiki/RESTful API.html"}],["meta",{"property":"og:local","content":"en-US"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:title","content":"RESTful API | Clash for Windows"}],["meta",{"property":"og:description","content":"RESTful API（Representational State Transfer API）是一种基于REST架构风格的应用程序接口设计方法，广泛用于Web服务和系统之间的数据交换。REST由Roy Fielding在2000年的博士论文中首次提出，强调无状态性、客户端-服务器分离、统一接口、可缓存性等原则。RESTful API的核心是通过HTTP协议进行资源的创建、读取、更新和删除操作（CRUD）。"}],["meta",{"property":"og:url","content":"https://www.clashcn.org/wiki/RESTful API.html"}],["meta",{"property":"og:site_name","content":"Clash for Windows"}],["meta",{"property":"og:image","content":"https://www.clashcn.org/android-chrome-192x192.png"}],["meta",{"property":"og:image:width","content":"192"}],["meta",{"property":"og:image:height","content":"192"}],["meta",{"property":"og:image:type","content":"image/png"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"author","content":"Clash for Windows"}],["meta",{"name":"twitter:label1","content":"作者"}],["meta",{"name":"twitter:data1","content":"Clash for Windows"}]]},"headers":[],"relativePath":"wiki/RESTful API.md","filePath":"wiki/RESTful API.md"}'),p={name:"wiki/RESTful API.md"};function l(o,s,r,i,c,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="restful-api" tabindex="-1">RESTful API <a class="header-anchor" href="#restful-api" aria-label="Permalink to &quot;RESTful API&quot;">​</a></h1><p>RESTful API（Representational State Transfer API）是一种基于REST架构风格的应用程序接口设计方法，广泛用于Web服务和系统之间的数据交换。REST由Roy Fielding在2000年的博士论文中首次提出，强调无状态性、客户端-服务器分离、统一接口、可缓存性等原则。RESTful API的核心是通过HTTP协议进行资源的创建、读取、更新和删除操作（CRUD）。</p><h2 id="restful-api-的特点" tabindex="-1">RESTful API 的特点 <a class="header-anchor" href="#restful-api-的特点" aria-label="Permalink to &quot;RESTful API 的特点&quot;">​</a></h2><ul><li><strong>无状态性</strong>：每个请求都包含了所有必要的信息（如身份验证信息），服务器不会在请求之间保留客户端的状态。</li><li><strong>客户端-服务器架构</strong>：客户端负责用户界面和用户体验，服务器负责数据存储和业务逻辑，二者相互独立。</li><li><strong>统一接口</strong>：RESTful API使用标准的HTTP动词（GET、POST、PUT、DELETE等）进行操作，接口设计规范一致，易于理解和使用。</li><li><strong>可缓存性</strong>：响应数据可以被标记为可缓存，以提高性能和减少服务器负载。</li><li><strong>分层系统</strong>：通过中间层（如负载均衡器、代理服务器）提升系统的可伸缩性和安全性。</li><li><strong>按需编码</strong>：服务器可以将代码或脚本发送到客户端执行，以增强客户端功能。</li></ul><h2 id="http动词" tabindex="-1">HTTP动词 <a class="header-anchor" href="#http动词" aria-label="Permalink to &quot;HTTP动词&quot;">​</a></h2><ul><li><strong>GET</strong>：用于读取资源，不会对服务器上的资源造成任何影响。</li><li><strong>POST</strong>：用于创建新资源或提交数据，服务器处理请求后创建新资源。</li><li><strong>PUT</strong>：用于更新现有资源，将客户端提供的数据覆盖服务器上的资源。</li><li><strong>DELETE</strong>：用于删除服务器上的资源。</li><li><strong>PATCH</strong>：用于部分更新资源，改变资源的部分内容。</li></ul><h2 id="url设计" tabindex="-1">URL设计 <a class="header-anchor" href="#url设计" aria-label="Permalink to &quot;URL设计&quot;">​</a></h2><p>RESTful API使用统一资源标识符（URI）来表示资源，每个资源有一个唯一的URL。资源之间的关系通过URL层级表示。</p><p>示例URL设计：</p><ul><li><code>GET /books</code>：获取所有图书列表。</li><li><code>GET /books/{id}</code>：获取特定ID的图书。</li><li><code>POST /books</code>：创建新图书。</li><li><code>PUT /books/{id}</code>：更新特定ID的图书。</li><li><code>DELETE /books/{id}</code>：删除特定ID的图书。</li></ul><h2 id="响应状态码" tabindex="-1">响应状态码 <a class="header-anchor" href="#响应状态码" aria-label="Permalink to &quot;响应状态码&quot;">​</a></h2><p>RESTful API使用HTTP状态码来表示请求的处理结果：</p><ul><li><strong>200 OK</strong>：请求成功，返回数据。</li><li><strong>201 Created</strong>：资源创建成功。</li><li><strong>204 No Content</strong>：请求成功，无返回内容。</li><li><strong>400 Bad Request</strong>：请求无效或格式错误。</li><li><strong>401 Unauthorized</strong>：请求未经授权。</li><li><strong>404 Not Found</strong>：请求的资源不存在。</li><li><strong>500 Internal Server Error</strong>：服务器内部错误。</li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>以下是一个简单的RESTful API示例，使用Node.js和Express框架创建一个书籍管理系统。</p><h3 id="服务器代码-node-js-express" tabindex="-1">服务器代码（Node.js + Express） <a class="header-anchor" href="#服务器代码-node-js-express" aria-label="Permalink to &quot;服务器代码（Node.js + Express）&quot;">​</a></h3><p>javascript</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const express = require(&#39;express&#39;);</span></span>
<span class="line"><span>const app = express();</span></span>
<span class="line"><span>app.use(express.json());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>let books = [</span></span>
<span class="line"><span>  { id: 1, title: &#39;1984&#39;, author: &#39;George Orwell&#39; },</span></span>
<span class="line"><span>  { id: 2, title: &#39;To Kill a Mockingbird&#39;, author: &#39;Harper Lee&#39; }</span></span>
<span class="line"><span>];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取所有书籍</span></span>
<span class="line"><span>app.get(&#39;/books&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  res.json(books);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取特定书籍</span></span>
<span class="line"><span>app.get(&#39;/books/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const book = books.find(b =&gt; b.id === parseInt(req.params.id));</span></span>
<span class="line"><span>  if (!book) return res.status(404).send(&#39;Book not found&#39;);</span></span>
<span class="line"><span>  res.json(book);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建新书籍</span></span>
<span class="line"><span>app.post(&#39;/books&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const book = {</span></span>
<span class="line"><span>    id: books.length + 1,</span></span>
<span class="line"><span>    title: req.body.title,</span></span>
<span class="line"><span>    author: req.body.author</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  books.push(book);</span></span>
<span class="line"><span>  res.status(201).json(book);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 更新书籍</span></span>
<span class="line"><span>app.put(&#39;/books/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const book = books.find(b =&gt; b.id === parseInt(req.params.id));</span></span>
<span class="line"><span>  if (!book) return res.status(404).send(&#39;Book not found&#39;);</span></span>
<span class="line"><span>  book.title = req.body.title;</span></span>
<span class="line"><span>  book.author = req.body.author;</span></span>
<span class="line"><span>  res.json(book);</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除书籍</span></span>
<span class="line"><span>app.delete(&#39;/books/:id&#39;, (req, res) =&gt; {</span></span>
<span class="line"><span>  const book = books.find(b =&gt; b.id === parseInt(req.params.id));</span></span>
<span class="line"><span>  if (!book) return res.status(404).send(&#39;Book not found&#39;);</span></span>
<span class="line"><span>  const index = books.indexOf(book);</span></span>
<span class="line"><span>  books.splice(index, 1);</span></span>
<span class="line"><span>  res.status(204).send();</span></span>
<span class="line"><span>});</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const port = process.env.PORT || 3000;</span></span>
<span class="line"><span>app.listen(port, () =&gt; console.log(\`Listening on port \${port}...\`));</span></span></code></pre></div><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>RESTful API是一种简单、灵活、易于扩展的Web服务设计方法，通过标准的HTTP协议和动词进行操作，使得客户端和服务器之间的通信更加直观和高效。它适用于各种规模的Web应用程序，从小型项目到大型分布式系统。</p><div class="tip custom-block"><p class="custom-block-title">🎉 节点推荐</p><ul><li>🚀 <a href="https://www.xn--9kqrm7t.com/#/register?code=JRtE5uIV" target="_blank" rel="noreferrer">优信云：IEPL/IPLC 高速专线，￥15.00/月</a><br></li><li><a href="https://cinb01.xxfaff.cc/#/register?inviteCode=80C209ADC772" target="_blank" rel="noreferrer">小旋风：IPLC专线高速稳定！8元/月起</a><br></li><li><a href="https://erwan6.net/auth/register?code=BoObCd" target="_blank" rel="noreferrer">尔湾云：最大峰值1000Mbps，全流媒体及ChatGPT解锁！最低12元/月</a><br></li><li><a href="https://ca01.dgy01.cc/#/register?code=JSSN0WQ9" target="_blank" rel="noreferrer">大哥云：年付低至7元/月，4年稳定老牌机场</a><br></li><li><a href="https://inv01.fatcatcloud.cc/register?aff=X1vZd2wf" target="_blank" rel="noreferrer">肥猫云：全专线中转隧道，高速大宽带不限设备数，低至6元/月（年付）</a><br></li><li><a href="https://homes.tr25.cn?code=ReCm" target="_blank" rel="noreferrer">疾风云：包年 6.9折 优惠码: jf2025</a></li></ul></div>`,21)]))}const h=n(p,[["render",l]]);export{g as __pageData,h as default};
