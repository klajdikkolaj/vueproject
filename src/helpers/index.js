import router from "@/router";

export const findById = (resources, id)=>{
    return resources.find(resource =>resource.id === id)
}
export function updateOrAppend(list, item, idField = 'id') {
    const index = list.findIndex(i => i[idField] === item[idField]);
    if (index !== -1) {
        list[index] = item;
    } else {
        list.push(item);
    }
}
export async function navigateToThread(threadId) {
    try {
        await router.push({name: 'Thread', params: {id: threadId}});
    } catch (error) {
        console.error("Navigation failed:", error);
    }
}
