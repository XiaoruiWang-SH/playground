import { useRef, useState } from "react";

function User() {
    const userName = "Ray";
    // const isLoggedIn = true;
    const unreadCount = 3;

    const [login, setLogin] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const inputRef = useRef<HTMLInputElement>(null)

    function handleClick() {
        setLogin((prev) => !prev)
    }
    function handleFocus() {
        inputRef.current?.focus()
    }

    return (
      <>
        {/* 页面标题 */}
        <h1 className="title">Welcome, {userName}</h1>
        {/* 条件渲染 */}
        {login ? <p>You are logged in.</p> : <p>Please log in.</p>}
        {/* 只在未读消息大于0时显示 */}
        {unreadCount > 0 && <p>You have {unreadCount} unread messages.</p>}
        {/* 表单标签与输入关联 */}
        <div>
          <label htmlFor="email">Emial</label>
          <input
            id="email"
            type="email"
            value={email}
            ref={inputRef}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
                />
            <button onClick={handleFocus}>
                Focus input
            </button>
        </div>

        {/* 点击事件 */}
        <button onClick={handleClick}>{login ? 'Logout' : 'Login'}</button>
      </>
    );
}

export default User;