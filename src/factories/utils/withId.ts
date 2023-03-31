import * as Factory from "factory.ts";

export const withIdFactory = Factory.makeFactory<{ id: string }>({
  id: Factory.each((i) => i.toString()),
});
