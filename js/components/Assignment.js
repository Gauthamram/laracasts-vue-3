export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-centre">
                {{ assignment.name }}

                <input type="checkbox" v-model="assignment.complete" class="ml-2">
            </label>
        </li> 
    `,

    props: {
        assignment: Object
    }
}