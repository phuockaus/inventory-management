import React from 'react';
import './header-bar.css'

function Header() {    
    return (
        <div id="header">
          <div id="header-icon">
            <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAyMjYgMjI2IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNnYtMjI2aDIyNnYyMjZ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2NjY2NjYyI+PHBhdGggZD0iTTExMywxOS43NzEzMmwtMTAzLjU4MzMzLDkzLjIyODY4aDI4LjI1djg0Ljc1aDY1LjkxNjY3di01Ni41aDE4LjgzMzMzdjU2LjVoNjUuOTE2Njd2LTg0Ljc1aDI4LjI1ek0xMTMsNDUuMTE1NGw1Ni41LDUwLjg1MzY4djcuNjE0MjZ2NzUuMzMzMzNoLTI4LjI1di01Ni41aC01Ni41djU2LjVoLTI4LjI1di04Mi45NDc1OXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
          </div>
          <div id="header-content">
            Inventory Management
          </div>
        </div>
    );
}

export default Header;