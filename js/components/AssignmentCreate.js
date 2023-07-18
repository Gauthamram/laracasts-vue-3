export default {
    template: `
        <div class="border border-gray-600">
            <form @submit.prevent="add">
                <input v-model="newAssignment" required="newAssignment" placeholder="New Assignment..." class="text-black p-2"/>
                <button type="submit" class="bg-white p-2 text-black border-l">Add</button>
            </form>
        </div>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add' , this.newAssignment),
            this.newAssignment = ''
        }
    }
    
}