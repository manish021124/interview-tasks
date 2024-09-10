export default function Home() {
  return (
    <div className="flex justify-center flex-col gap-4 items-center mt-20">
      <h1 className="text-4xl font-bold">Welcome!</h1>
      <p className="text-xl">
        Please go through nav links to see tasks 1, 2 and 4. You can also go
        through code{" "}
        <a
          href="https://github.com/manish021124/interview-tasks"
          target="_blank"
          className="text-blue-500 hover:underline underline-offset-1"
        >
          here
        </a>
        .
      </p>
      <p className="text-xl">
        For tasks 3 and 5 (i.e. problem solving tasks) visit{" "}
        <a
          href="https://github.com/manish021124/interview-problem-solving-tasks"
          target="_blank"
          className="text-blue-500 hover:underline underline-offset-1"
        >
          here
        </a>
        .
      </p>
      <div className="text-lg">
        <p className="font-semibold underline underline-offset-1">
          Login Credentials:
        </p>
        <p>Username: admin</p>
        <p>Password: password</p>
      </div>
    </div>
  );
}
