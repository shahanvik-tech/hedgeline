import {getMarkets} from '@/lib/markets';import {NextResponse} from 'next/server';export const runtime='nodejs';export async function GET(){return NextResponse.json(await getMarkets())}
