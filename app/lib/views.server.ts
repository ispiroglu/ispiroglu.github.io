export async function incrementViews(key: string, env: Env): Promise<number> {
  const current = await env.VIEWS_KV.get(key);
  const count = current ? parseInt(current) : 0;
  const newCount = count + 1;
  await env.VIEWS_KV.put(key, newCount.toString());
  return newCount;
}

export async function getViews(key: string, env: Env): Promise<number> {
  const current = await env.VIEWS_KV.get(key);
  return current ? parseInt(current) : 0;
}
