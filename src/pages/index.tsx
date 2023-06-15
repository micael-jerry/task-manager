import { dateFormater } from "@/utils/dateFormater";
import Head from "next/head";
import { useRouter } from "next/router";

/**
  Calculates the time difference between the server time and client time.
  @param {Date} serverTime - The server time.
  @param {Date} clientTime - The client time.
  @returns {string} The time difference in the format "{days} days, {hours} hours, {minutes} minutes, {seconds} seconds".
*/

export const getServerSideProps = async (context: any) => {
  const date = new Date();
  return {
    props: {
      serverTimeMilliseconds: date.getTime(),
    },
  };
};

const calculateTimeDifference = (server: Date, client: Date): Date => {
  const differenceMs: number = client.getTime() - server.getTime();
  return new Date(server.getTime() + differenceMs);
};

export default function Home({serverTimeMilliseconds}: {serverTimeMilliseconds:number}) {
  const serverTime: Date = new Date(serverTimeMilliseconds)
  const clientTime: Date = new Date();
  const diffTime: Date = calculateTimeDifference(serverTime, clientTime);

  const router = useRouter();
  const moveToTaskManager = () => {
    router.push("/tasks");
  }

  return (
    <>
      <Head>
        <title>Web 2 - Exam TD</title>
        <meta name="description" content="Just an exam" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>The easiest exam you will ever find</h1>
        <div>
          {/* Display here the server time (DD-MM-AAAA HH:mm)*/}
          <p>
            Server time:{" "}
            <span className="serverTime">{dateFormater(serverTime.toString())}</span>
          </p>

          {/* Display here the time difference between the server side and the client side */}
          <p>
            Time diff:{" "}
            <span className="serverTime">{dateFormater(diffTime.toString())}</span>
          </p>
        </div>

        <div>
          <button onClick={moveToTaskManager}>Go to task manager</button>
        </div>
      </main>
    </>
  );
}
