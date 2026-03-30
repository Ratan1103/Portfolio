import { NextResponse } from "next/server";

export async function GET() {
  try {
    const username = "ratan_1012";

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query getUserProfile($username: String!) {
            matchedUser(username: $username) {
              submitStats: submitStatsGlobal {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username },
      }),
    });

    const data = await res.json();

    const stats = data.data.matchedUser.submitStats.acSubmissionNum;

    const easy = stats.find((s) => s.difficulty === "Easy")?.count || 0;
    const medium = stats.find((s) => s.difficulty === "Medium")?.count || 0;
    const hard = stats.find((s) => s.difficulty === "Hard")?.count || 0;

    return NextResponse.json({
      totalSolved: easy + medium + hard,
      easySolved: easy,
      mediumSolved: medium,
      hardSolved: hard,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}