
  <template>
        <div class="form-group">
            <label for="name">选择列表</label>
            <select class="form-control"  v-model="$parent.currentcomponent.style">
                <option 
                    v-for="(style, index) in ['Default', 'Primary', 'Info', 'Success', 'Warning', 'Danger']"
                    :key="index"
                    :value="style">{{style}}</option>
            </select>
        </div>
  </template>
  